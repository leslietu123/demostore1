type ScrollPosition = { x: number; y: number }

export function saveScrollPos(url: string) {
  const scrollPos: ScrollPosition = { x: window.scrollX, y: window.scrollY }
  sessionStorage.setItem(`SCROLLPOS-${url}`, JSON.stringify(scrollPos))
}

export function getScrollPos(url: string): ScrollPosition {
  const item = sessionStorage.getItem(`SCROLLPOS-${url}`)
  if (!item) {
    return { x: 0, y: 0 }
  }
  return JSON.parse(item)
}
