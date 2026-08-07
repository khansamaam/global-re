'use client'

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function MouseGlow({ className }: { className?: string }) {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    const container = glow?.parentElement

    if (!glow || !container || prefersReducedMotion()) return

    const parallaxTargets = Array.from(
      container.querySelectorAll<HTMLElement>('[data-mouse-parallax]'),
    )

    gsap.set(glow, {
      autoAlpha: 0,
      x: container.clientWidth * 0.64,
      y: container.clientHeight * 0.42,
      scale: 0.86,
    })
    gsap.to(glow, {
      autoAlpha: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
    })

    const moveGlow = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      if (!rect) return

      const relativeX = (event.clientX - rect.left) / rect.width - 0.5
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5

      gsap.to(glow, {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        duration: 0.7,
        ease: 'power3.out',
      })

      parallaxTargets.forEach((target) => {
        const depth = Number(target.dataset.parallaxDepth ?? 14)

        gsap.to(target, {
          x: relativeX * depth,
          y: relativeY * depth,
          duration: 0.85,
          ease: 'power3.out',
        })
      })
    }

    const resetOnLeave = () => {
      gsap.to(glow, {
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      })

      parallaxTargets.forEach((target) => {
        gsap.to(target, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'power2.inOut',
        })
      })
    }

    container.addEventListener('pointermove', moveGlow)
    container.addEventListener('pointerleave', resetOnLeave)

    return () => {
      container.removeEventListener('pointermove', moveGlow)
      container.removeEventListener('pointerleave', resetOnLeave)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute left-0 top-0 -z-10 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.76_0.135_78/0.24),oklch(0.44_0.079_231/0.12)_38%,transparent_68%)] blur-2xl',
        className,
      )}
    />
  )
}

export function GsapReveal({
  children,
  className,
  delay = 0,
  y = 42,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <div
      className={cn('gsap-reveal', className)}
      data-gsap-delay={delay}
      data-gsap-y={y}
    >
      {children}
    </div>
  )
}

export function MetricCountUp({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}) {
  const valueRef = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(() => value.toFixed(decimals))

  useEffect(() => {
    const element = valueRef.current

    if (!element || prefersReducedMotion()) {
      setDisplay(value.toFixed(decimals))
      return
    }

    const target = element
    const state = { value: 0 }
    let tween: gsap.core.Tween | null = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        observer.disconnect()
        tween = gsap.to(state, {
          value,
          duration: 1.35,
          ease: 'power2.out',
          onUpdate: () => setDisplay(state.value.toFixed(decimals)),
        })
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.1,
      },
    )

    observer.observe(target)

    return () => {
      observer.disconnect()
      tween?.kill()
    }
  }, [decimals, value])

  return (
    <span ref={valueRef} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export function MarqueeStrip({
  items,
  className,
}: {
  items: string[]
  className?: string
}) {
  const repeatedItems = [...items, ...items]

  return (
    <div className={cn('overflow-hidden', className)}>
      <div className="flex w-max animate-marquee items-center gap-3">
        {repeatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
