import { useState } from 'react'
import { asset } from '../../utils/assets'
import { Icon } from './Icon'

const languages = [
  { label: 'English', flag: 'images/thumbs/flag1.png' },
  { label: 'Japan', flag: 'images/thumbs/flag2.png' },
  { label: 'French', flag: 'images/thumbs/flag3.png' },
  { label: 'Germany', flag: 'images/thumbs/flag4.png' },
  { label: 'Bangladesh', flag: 'images/thumbs/flag6.png' },
  { label: 'Sought Kores', flag: 'images/thumbs/flag5.png' },
]

export function LanguageDropdown() {
  const [selected, setSelected] = useState(languages[0])
  const [open, setOpen] = useState(false)

  return (
    <div
      className="cursor-small position-relative group-item hover-mt-0 xs-d-block d-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="d-flex align-items-center tw-gap-2">
        <button type="button" className="selected-text text-white py-lg-4 d-flex align-items-center gap-2 border-0 bg-transparent">
          <span className="tw-w-25-px tw-h-25-px border border-white border-2 rounded-circle common-shadow d-flex justify-content-center align-items-center">
            <img src={asset(selected.flag)} alt="" className="w-100 h-100 object-fit-cover rounded-circle" />
          </span>
          {selected.label}
        </button>
        <span className="text-white">
          <Icon name="caret-down" weight="bold" />
        </span>
      </div>
      <ul
        className={`lang-dropdown tw-max-h-300-px overflow-y-auto scroll-sm bg-white common-shadow tw-px-4 tw-py-3 position-absolute tw-end-0 top-100 min-w-max tw-rounded-lg d-flex flex-column tw-gap-3 tw-z-99 ${open ? 'tw-visible opacity-100 tw-mt-0' : 'tw-invisible opacity-0 tw-mt-4'}`}
      >
        {languages.map((lang) => (
          <li key={lang.label}>
            <button
              type="button"
              className="text-black d-flex align-items-center gap-2 hover-text-main-600 active--translate-y-1 tw-duration-150 border-0 bg-transparent"
              onClick={() => setSelected(lang)}
            >
              <span className="tw-w-25-px tw-h-25-px border border-white border-2 rounded-circle d-flex justify-content-center align-items-center">
                <img src={asset(lang.flag)} alt="" className="w-100 h-100 object-fit-cover rounded-circle" />
              </span>
              {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
