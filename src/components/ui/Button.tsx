import { Link } from 'react-router-dom'
import { Icon } from './Icon'

type ButtonVariant = 'main' | 'main-two'

interface ButtonProps {
  href: string
  label: string
  variant?: ButtonVariant
  className?: string
  showCheck?: boolean
  rounded?: boolean
}

export function Button({
  href,
  label,
  variant = 'main',
  className = '',
  showCheck = true,
  rounded = false,
}: ButtonProps) {
  const variantClass = variant === 'main-two' ? 'btn-main-two hover-style-three' : 'btn-main hover-style-two'

  return (
    <Link
      to={href}
      className={`cursor-small btn ${variantClass} button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 ${rounded ? 'rounded-0 tw-px-13 tw-py-505' : 'tw-py-405'} ${className}`}
      data-block="button"
    >
      <span className="button__flair" />
      <span className="button__label">{label}</span>
      {showCheck && (
        <span className="tw-w-7 tw-h-7 bg-white text-main-600 tw-text-sm tw-rounded d-flex justify-content-center align-items-center position-relative group-hover-bg-main-600 group-hover-text-white tw-duration-500">
          <Icon name="check" weight="bold" />
        </span>
      )}
    </Link>
  )
}
