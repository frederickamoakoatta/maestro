import { Link } from 'react-router-dom'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'

export function ContactSection() {
  return (
    <section className="d-xl-flex">
      <div className="w-100 xl-w-50 position-relative">
        <div className="d-flex h-100">
          <img src={asset('images/thumbs/contact-us-img1.png')} alt="" className="d-sm-block d-none" />
          <div className="text-center animation-item bg-main-two-600 tw-py-12 tw-px-6 flex-grow-1">
            <span className="cursor-big">
              <img src={asset('images/icons/conact-us-icon1.svg')} alt="" className="animate__wobble" />
            </span>
            <h2 className="splitTextStyleOne text-white tw-mb-8 tw-mt-6 cursor-big">Need Our Services?</h2>
            <Link to="/contact" className="cursor-small fw-bold text-white d-inline-flex align-items-center tw-gap-5 hover-text-main-600">
              Contact With us
              <img src={asset('images/icons/arrow-right.svg')} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-100 xl-w-50 position-relative">
        <div className="d-sm-flex">
          <div className="position-relative">
            <img src={asset('images/thumbs/contact-us-img2.png')} alt="" className="w-100 h-100 object-fit-cover" />
            <a
              href="https://www.youtube.com/watch?v=MFLVmAE4cqg"
              target="_blank"
              rel="noreferrer"
              className="play-button circle-border bg-inherit-animation cursor-big tw-w-75-px tw-h-75-px d-flex justify-content-center align-items-center bg-main-three-600 text-main-two-600 hover-text-main-two-700 active-scale-094 rounded-circle tw-text-xl position-absolute top-50 tw-start-50 translate-middle"
            >
              <Icon name="play" weight="fill" />
            </a>
          </div>
          <div className="text-center animation-item bg-main-600 tw-py-12 tw-px-6 flex-grow-1">
            <span className="cursor-big">
              <img src={asset('images/icons/conact-us-icon2.svg')} alt="" className="animate__wobble" />
            </span>
            <h2 className="splitTextStyleOne text-white tw-mb-8 tw-mt-6 cursor-big">Discuss With Agents</h2>
            <Link to="/contact" className="cursor-small fw-bold text-white d-inline-flex align-items-center tw-gap-5 hover-text-main-two-600">
              Contact With us
              <img src={asset('images/icons/arrow-right.svg')} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
