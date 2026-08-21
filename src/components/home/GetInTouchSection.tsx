import { asset } from '../../utils/assets'
import { SectionHeading } from '../ui/SectionHeading'

const locations = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  visible: i === 3,
}))

export function GetInTouchSection() {
  return (
    <section className="get-in-touch py-140 position-relative overflow-hidden">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6">
            <SectionHeading eyebrow="Safe Transportation & Logistics" title="Get In Touch" centered={false} />
            <p className="cursor-small text-neutral-900 tw-ps-205 border-start border-main-600 border-3">
              Temperate ocean-bass sea chub unicorn fish treefish eulachon Flier, bighe carp Devario shortnose sucker platy smalleye
            </p>

            <div className="tw-mt-10 tw-mb-13">
              <span className="text-main-two-600 fw-bold cursor-small">24/7 Support center</span>
              <h2 className="tw-mt-3 cursor-big">
                <a href="tel:+1718-904-4450" className="text-main-600 hover--translate-y-1 tw-duration-200 font-body">
                  +1 718-904-4450
                </a>
              </h2>
            </div>

            <div className="d-flex flex-sm-nowrap flex-wrap tw-gap-7">
              <div className="bg-neutral-50 tw-rounded-lg tw-py-7 tw-px-6 max-w-280-px" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h5 className="tw-mb-3 cursor-big">Headquater -</h5>
                <p className="text-main-two-600 fw-medium cursor-small">4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
              <div className="border border-main-two-600 tw-rounded-lg tw-py-7 tw-px-6 max-w-280-px" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <h5 className="tw-mb-3 cursor-big">Email Us -</h5>
                <p className="text-main-two-600 fw-medium cursor-small">4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="location">
              <div>
                <img src={asset('images/shapes/map-img.png')} alt="" />
              </div>
              {locations.map((loc) => (
                <div key={loc.id} className="location-item position-relative d-inline-block">
                  <span className="location-item__point tw-w-3 tw-h-3 rounded-circle bg-main-600 cursor-pointer scalable-animation position-relative cursor-small hover-scale-30 tw-duration-500" />
                  <div
                    className={`location-item__card bg-white tw-rounded-md tw-p-2 common-shadow-four d-inline-block max-w-148-px position-absolute bottom-100 tw-start-50 tw--translate-x-50 min-w-max tw-duration-300 z-2 ${loc.visible ? '' : 'invisible opacity-0'}`}
                  >
                    <div className="tw-rounded-md overflow-hidden tw-max-h-88-px mx-auto">
                      <img src={asset('images/thumbs/map-img1.png')} alt="" className="w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="tw-px-2 tw-pt-5 tw-pb-3">
                      <span className="fw-bold text-main-two-600 tw-text-sm max-w-130-px cursor-small">198 West 21th Street, New York</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
