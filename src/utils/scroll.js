/**
 * Prevent Page Scrolling When a Modal is Open
 * See https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
 */
export function pausePageScroll(el = document.body) {
  const scrollY = window.scrollY
  el.style.position = 'fixed'
  el.style.top = `-${scrollY}px`
}

export function restorePageScroll(el = document.body) {
  const scrollY = el.style.top
  el.style.position = ''
  el.style.top = ''
  window.scrollTo(0, Number.parseInt(scrollY || '0') * -1)
}
