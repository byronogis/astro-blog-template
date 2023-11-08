/**
 * Prevent Page Scrolling When a Modal is Open
 * See https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
 * Update: also set width to 100vw to fix box be squished
 */
export function pausePageScroll(el = document.body) {
  const scrollY = window.scrollY
  el.style.position = 'fixed'
  el.style.top = `-${scrollY}px`
  el.style.width = `100vw`
}

export function restorePageScroll(el = document.body) {
  const scrollY = el.style.top

  if (scrollY === '') {
    return
  }

  el.style.position = ''
  el.style.top = ''
  el.style.width = ``
  window.scrollTo(0, Number.parseInt(scrollY || '0') * -1)
}
