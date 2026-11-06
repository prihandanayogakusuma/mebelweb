import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Jeda kemunculan dalam milidetik, untuk efek berurutan. */
  delay?: number
}

/** Memunculkan konten dengan halus saat masuk layar. */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        observer.disconnect()
      },
      { rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div ref={ref} style={style} data-shown={shown || undefined} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
