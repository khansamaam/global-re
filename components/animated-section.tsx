'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function AnimatedSection({
  children,
  className,
  delay = 0,
  stagger = 0,
  threshold = 0.1,
}: {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  threshold?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class when element enters viewport
            element.classList.add('animate-in')
            observer.unobserve(element)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={cn('opacity-0 translate-y-4', className)}
      style={{
        animationDelay: `${delay}ms`,
        '--stagger': `${stagger}ms`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
