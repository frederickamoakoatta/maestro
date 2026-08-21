import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/homepage/carousels'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function BlogSection() {
  return (
    <section className="blog py-140">
      <div className="container">
        <div className="max-w-632-px mx-auto text-center tw-mb-15">
          <SectionHeading eyebrow="Safe Transportation & Logistics" title="Read All Our Logistics News & Blogs" titleTag="h2" />
        </div>

        <div className="row gy-4">
          {blogPosts.map((post) => (
            <div key={post.title + post.date} className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={post.aosDelay}>
              <div className="blog-item">
                <div className="position-relative overflow-hidden">
                  <Link to={post.href} className="w-100 d-block">
                    <img src={asset(post.image)} alt="" className="hover-scale-108 tw-duration-300 w-100 h-100 object-fit-cover" />
                  </Link>
                  <h5 className={`blog-date cursor-big tw-duration-300 tw-py-4 text-white d-flex justify-content-center align-items-center max-w-82-px w-100 tw-px-4 text-center tw-rounded-md fw-medium position-absolute top-0 tw-start-0 tw-mt-2 tw-ms-2 ${post.dateBgClass}`}>
                    {post.date}
                  </h5>
                  <div className={`blog-tag tw-duration-300 tw-px-4 tw-py-205 text-white fw-semibold tw-text-xs d-flex align-items-center tw-gap-2 cursor-big position-absolute tw-start-0 bottom-0 ${post.tagBgClass}`}>
                    <span className="d-flex">
                      <Icon name="tag" weight="fill" />
                    </span>
                    {post.tag}
                  </div>
                </div>
                <div className="tw-mt-505">
                  <div className="tw-mb-505 d-flex align-items-center tw-gap-6 flex-wrap">
                    <div className="d-flex align-items-center tw-gap-2 cursor-small">
                      <span className="text-main-600 tw-text-lg">
                        <Icon name="user-circle" weight="bold" />
                      </span>
                      <span className="text-neutral-600 tw-text-sm">{post.author}</span>
                    </div>
                    <div className="d-flex align-items-center tw-gap-2 cursor-small">
                      <span className="text-main-600 tw-text-lg">
                        <Icon name="chats-circle" weight="bold" />
                      </span>
                      <span className="text-neutral-600 tw-text-sm">{post.comments}</span>
                    </div>
                  </div>
                  <h5 className="tw-mb-10">
                    <Link to={post.href} className="splitTextStyleTwo line-clamp-2 hover-text-main-600 cursor-big">
                      {post.title}
                    </Link>
                  </h5>
                  <Link to={post.href} className="text-neutral-900 fw-semibold hover-text-main-600 cursor-small hover--translate-y-1 tw-duration-150 d-flex align-items-center tw-gap-2">
                    <span className="text-decoration-underline">Read More</span>
                    <Icon name="caret-right" weight="bold" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
