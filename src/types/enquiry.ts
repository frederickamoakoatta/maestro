export type MaestroEnquiryType = 'request_demo' | 'request_quote' | 'speak_to_team' | 'support'

export interface MaestroEnquiryRequest {
  submission_id: string
  full_name: string
  organisation: string
  email: string
  phone: string
  enquiry_type: MaestroEnquiryType
  message: string
}

export interface MaestroEnquiryResponse {
  enquiry_id: string
  site: 'maestro' | 'presto'
  status: 'received'
}

export interface EmitApiErrorBody {
  detail?: string
  title?: string
  status?: number
}
