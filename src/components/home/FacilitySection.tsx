import { asset } from '../../utils/assets'

const facilities = [
  { icon: 'images/icons/facility-icon1.svg', title: 'Get Compensation', delay: 100 },
  { icon: 'images/icons/facility-icon2.svg', title: 'No Spend Your Time', delay: 200 },
  { icon: 'images/icons/facility-icon3.svg', title: 'Warehouse Facilities', delay: 300 },
]

export function FacilitySection() {
  return (
    <section className="facility pt-140">
      <div className="container">
        <div className="tw-pb-12 border-bottom border-neutral-100">
          <div className="row gy-5">
            {facilities.map((item) => (
              <div key={item.title} className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={item.delay}>
                <div className="d-flex flex-sm-row flex-column align-items-sm-center tw-gap-7 animation-item">
                  <span className="cursor-big flex-shrink-0 tw-w-108-px tw-h-108-px bg-main-50 rounded-circle d-flex justify-content-center align-items-center">
                    <img src={asset(item.icon)} alt="" className="animate__bounce" />
                  </span>
                  <div className="flex-grow-1">
                    <h5 className="tw-mb-4 cursor-big">{item.title}</h5>
                    <p className="text-neutral-1000 cursor-small">Temperate ocean-bass seachub treefish eulachon.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
