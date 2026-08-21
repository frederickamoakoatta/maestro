import { asset, bgStyle } from '../../utils/assets'
import { Icon } from '../ui/Icon'

export function QuoteSection() {
  return (
    <section className="quate bg-img tw-mb-9 position-relative" style={bgStyle('images/shapes/quate-bg-img.png')}>
      <img src={asset('images/thumbs/karen.png')} alt="" className="updown-animation position-absolute bottom-0 tw-end-0" />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="py-120">
              <span className="splitTextStyleTwo cursor-small tw-text-xl fw-bold fst-italic text-decoration-underline text-main-600 tw-mb-305">
                Safe Transportation & Logistics
              </span>
              <h2 className="splitTextStyleOne cursor-big text-white tw-mb-8">Transport & Logistics Services We are the best</h2>
              <p className="cursor-small text-white">
                Transmds is the world's leading global coordinations supplier — we uphold industry and exchange the
              </p>
              <ul className="cursor-small d-flex flex-column tw-gap-3 tw-mt-14">
                {[200, 400].map((delay) => (
                  <li key={delay} className="d-flex align-items-center tw-gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={delay}>
                    <span className="text-main-600 d-flex">
                      <Icon name="check" weight="bold" />
                    </span>
                    <span className="text-neutral-400 tw-text-lg">Preaching Worship An Online Family</span>
                  </li>
                ))}
              </ul>
              <div className="tw-mt-15 d-flex align-items-center tw-gap-5">
                <div className="tw-rounded-md overflow-hidden cursor-big" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <img src={asset('images/thumbs/quate-img.png')} alt="" className="w-100 h-100 object-fit-cover" />
                </div>
                <p className="tw-text-lg text-white fw-bold max-w-310-px cursor-small" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  Leading global logistic and transport agency since <span className="text-main-600">1990</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
            <div className="clip-path-short position-relative tw-translate-y-35-px bg-main-600 tw-py-15 px-lg-5 tw-px-56 tw-mt-16 max-w-468-px ms-auto">
              <h4 className="text-white tw-mb-8 cursor-big">Request a quote form</h4>
              <form action="#">
                <div className="row gy-4">
                  <div className="col-sm-12">
                    <label htmlFor="personalInfo" className="cursor-small text-white tw-text-sm tw-mb-4">
                      Personal information
                    </label>
                    <input type="text" className="cursor-big tw-px-5 tw-py-3 bg-white tw-placeholder-text-main-two-600 border-0 focus-outline-0 w-100 rounded-0 shadow-none" id="personalInfo" placeholder="Your Name" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="Email" className="cursor-small text-white tw-text-sm tw-mb-4">Email</label>
                    <input type="email" className="cursor-big tw-px-5 tw-py-3 bg-white tw-placeholder-text-main-two-600 border-0 focus-outline-0 w-100 rounded-0 shadow-none" id="Email" placeholder="Email" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="Phone" className="cursor-small text-white tw-text-sm tw-mb-4">Phone</label>
                    <input type="text" className="cursor-big tw-px-5 tw-py-3 bg-white tw-placeholder-text-main-two-600 border-0 focus-outline-0 w-100 rounded-0 shadow-none" id="Phone" placeholder="Phone" />
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="deliveryInfo" className="cursor-small text-white tw-text-sm tw-mb-4">Delivery information</label>
                    <select id="deliveryInfo" className="cursor-big tw-px-5 tw-py-3 bg-white border-0 focus-outline-0 w-100 rounded-0 shadow-none form-select" defaultValue="">
                      <option value="" hidden>Delivery City</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chandpur">Chandpur</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="rangpur">Ranngpur</option>
                    </select>
                  </div>
                  <div className="col-sm-12">
                    <button type="submit" className="cursor-small btn btn-main-two hover-style-two button--stroke d-inline-flex align-items-center justify-content-center tw-gap-2 group active--translate-y-2 fw-semibold flex-grow-1 rounded-0 tw-px-13 tw-py-505 w-100 tw-h-15 tw-mt-6" data-block="button">
                      <span className="button__flair" />
                      <span className="button__label">Get A Quate</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
