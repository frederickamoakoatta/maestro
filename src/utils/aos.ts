export function aosAttrs(delay = 0, animation = 'fade-up') {
  return {
    'data-aos': animation,
    'data-aos-delay': String(delay),
    'data-aos-duration': '700',
    'data-aos-easing': 'ease-out-cubic',
  }
}
