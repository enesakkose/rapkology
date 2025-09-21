import { useRef } from 'react'

export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const st = useRef({ down: false, startX: 0, scrollLeft: 0 })

  const start = (x: number) => {
    if (!ref.current) return
    st.current = {
      down: true,
      startX: x - ref.current.getBoundingClientRect().left,
      scrollLeft: ref.current.scrollLeft,
    }
  }
  const end = () => (st.current.down = false)

  const onMouseDown = (e: React.MouseEvent) => start(e.pageX)
  const onMouseMove = (e: React.MouseEvent) => {
    if (!st.current.down || !ref.current) return
    e.preventDefault()
    const x = e.pageX - ref.current.getBoundingClientRect().left
    ref.current.scrollLeft = st.current.scrollLeft - (x - st.current.startX)
  }

  const onTouchStart = (e: React.TouchEvent) => start(e.touches[0].pageX)
  const onTouchMove = (e: React.TouchEvent) => {
    if (!st.current.down || !ref.current) return
    e.preventDefault() // drag sırasında sayfa kaymasın
    const x = e.touches[0].pageX - ref.current.getBoundingClientRect().left
    ref.current.scrollLeft = st.current.scrollLeft - (x - st.current.startX)
  }

  // Dikey wheel hareketini yatay scroll'a çevir (trackpad/mouse wheel rahat olsun)
  const onWheel = (e: React.WheelEvent) => {
    if (!ref.current) return
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      ref.current.scrollLeft += e.deltaY
      e.preventDefault()
    }
  }

  return {
    ref,
    handlers: {
      onMouseDown,
      onMouseMove,
      onMouseLeave: end,
      onMouseUp: end,
      onTouchStart,
      onTouchMove,
      onTouchEnd: end,
      onWheel,
    },
  }
}
