import { useRadialProgress } from '../../hooks/useRadialProgress'
import { asset, bgStyle } from '../../utils/assets'
import { SectionHeading } from '../ui/SectionHeading'

const radialStats = [
  { percentage: 90, title: 'Container Delivery', description: 'End to end fiber optic cable nnectivity for stable', delay: 100 },
  { percentage: 70, title: 'Good Packaging', description: 'End to end fiber optic cable nnectivity for stable', delay: 300 },
]

const counterStats = [
  { value: '35+', label: 'Countries Represented', bg: 'bg-main-600', textClass: 'text-white', delay: 100 },
  { value: '853+', label: 'Projects completed', bg: 'bg-main-two-600', textClass: 'text-white', delay: 200 },
  { value: '35+', label: 'Total Revuneue', bg: 'bg-main-three-600', textClass: 'text-main-two-600', delay: 300 },
]

export function CounterSection() {
  useRadialProgress()

  return (
    <section className="counter d-lg-flex">
      <div className="w-100 lg-w-50 position-relative">
        <img src={asset('images/shapes/counter-shape.png')} alt="" className="position-absolute top-0 tw-start-0" />
        <img src={asset('images/thumbs/counter-img.png')} alt="" className="w-100 h-100 object-fit-cover" />
        <div className="bg-main-two-600 tw-p-10 position-absolute tw-start-0 bottom-0 tw-end-0 z-1">
          <div className="row gy-4">
            {radialStats.map((stat) => (
              <div key={stat.title} className="col-sm-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={stat.delay}>
                <div className="d-flex align-items-center tw-gap-8">
                  <div>
                    <svg className="radial-progress cursor-big" data-percentage={stat.percentage} viewBox="0 0 80 80">
                      <circle className="incomplete" cx="40" cy="40" r="35" />
                      <circle className="complete" cx="40" cy="40" r="35" />
                      <text className="percentage bg-white" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">
                        {stat.percentage}%
                      </text>
                    </svg>
                  </div>
                  <div>
                    <h6 className="tw-text-xl text-white tw-mb-4 cursor-big">{stat.title}</h6>
                    <p className="text-white line-clamp-2 max-w-210-px cursor-small">{stat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="w-100 tw-ps-110-px lg-w-50 bg-img py-120 position-relative z-1 h-auto d-flex flex-column justify-content-center overflow-hidden"
        style={bgStyle('images/shapes/counter-bg.png')}
      >
        <img src={asset('images/thumbs/counter-bg-img.png')} alt="" className="counter-bg-img position-absolute bottom-0 tw-end-0 z-n1" />
        <img src={asset('images/thumbs/biman-blue.png')} alt="" className="blue-biman position-absolute top-0 tw-end-0 z-n1" />

        <div className="max-w-632-px">
          <SectionHeading
            eyebrow="Safe Transportation & Logistics"
            title="We Provide Full Assistance in Freight & Warehousing"
            centered={false}
          />
          <p className="cursor-small text-neutral-900">
            Temperate ocean-bass sea chub unicorn fish treefish eulachon tidewater. Flier, bighe carp Devario shortnose sucker platy smalleye
          </p>

          <div className="tw-mt-10 d-flex flex-wrap tw-gap-5">
            {counterStats.map((stat) => (
              <div
                key={stat.label}
                className={`text-center flex-grow-1 max-w-190-px w-100 ${stat.bg} tw-rounded-lg tw-px-8 tw-py-10`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={stat.delay}
              >
                <h2 className={`cursor-big counter font-body ${stat.textClass} tw-mb-2`}>{stat.value}</h2>
                <p className={`cursor-small ${stat.textClass} tw-text-lg`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
