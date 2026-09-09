import type {
  EmitApiErrorBody,
  MaestroEnquiryRequest,
  MaestroEnquiryResponse,
} from '../types/enquiry'

const API_BASE_URL = import.meta.env.VITE_EMIT_API_URL as string | undefined

const SITE_SLUG = (import.meta.env.VITE_EMIT_SITE as string | undefined) ?? 'maestro'

export class EnquiryApiError extends Error {
  readonly status: number
  readonly title?: string

  constructor(status: number, message: string, title?: string) {
    super(message)
    this.name = 'EnquiryApiError'
    this.status = status
    this.title = title
  }
}

function getEnquiriesEndpoint(): string | undefined {
  if (!API_BASE_URL?.trim()) {
    return undefined
  }

  const base = API_BASE_URL.replace(/\/$/, '')
  return `${base}/api/v1/sites/${SITE_SLUG}/enquiries`
}

export function isEnquiryApiConfigured(): boolean {
  return Boolean(getEnquiriesEndpoint())
}

async function parseError(response: Response): Promise<EnquiryApiError> {
  let message = `Enquiry API responded with ${response.status}`
  let title: string | undefined

  try {
    const body = (await response.json()) as EmitApiErrorBody
    if (body.detail) message = body.detail
    if (body.title) title = body.title
  } catch {
    // ignore non-JSON error bodies
  }

  return new EnquiryApiError(response.status, message, title)
}

export async function submitMaestroEnquiry(
  payload: MaestroEnquiryRequest,
): Promise<MaestroEnquiryResponse> {
  const endpoint = getEnquiriesEndpoint()
  if (!endpoint) {
    throw new EnquiryApiError(0, 'Enquiry API URL is not configured')
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  // Idempotent retry: duplicate submission_id is treated as success.
  if (response.status === 409) {
    return {
      enquiry_id: payload.submission_id,
      site: 'maestro',
      status: 'received',
    }
  }

  if (!response.ok) {
    throw await parseError(response)
  }

  return (await response.json()) as MaestroEnquiryResponse
}
