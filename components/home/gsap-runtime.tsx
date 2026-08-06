'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function HomeGsapRuntime() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    document.documentElement.dataset.globalReGsap = 'loaded'
    console.info('[Global RE] GSAP homepage runtime loaded')

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768

    if (reduceMotion || isMobile) {
      // On mobile / reduced-motion: make everything visible immediately, no animations
      document.documentElement.dataset.globalReGsap = isMobile ? 'mobile' : 'reduced'

      document
        .querySelectorAll<HTMLElement>('.gsap-reveal, [data-gsap-item], .animate-fade-up')
        .forEach((el) => {
          el.style.opacity = '1'
          el.style.transform = 'none'
          el.style.filter = 'none'
          el.style.animation = 'none'
          el.classList.remove('animate-fade-up')
        })

      return
    }

    const context = gsap.context(() => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('.home-scroll-page > section'),
      )
      const hero = sections[0]

      if (hero) {
        const heroTargets = Array.from(
          hero.querySelectorAll<HTMLElement>('.hero-kinetic-copy > *, .hero-actions > *'),
        )

        gsap.fromTo(
          heroTargets,
          { autoAlpha: 0, y: 54, filter: 'blur(14px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.15,
            ease: 'power3.out',
            stagger: 0.09,
          },
        )

        gsap.fromTo(
          hero.querySelectorAll<HTMLElement>('.motion-card, .motion-chip, .motion-metric'),
          { autoAlpha: 0, y: 70, rotate: 0, scale: 0.9 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            clearProps: 'transform',
            duration: 1,
            ease: 'power3.out',
            stagger: 0.08,
            delay: 0.2,
          },
        )
      }

      gsap.utils
        .toArray<HTMLElement>('.gsap-reveal')
        .forEach((element, index) => {
          const delay = Number(element.dataset.gsapDelay ?? 0)
          const y = Number(element.dataset.gsapY ?? 42)

          element.classList.remove('animate-fade-up')
          element.style.animation = 'none'

          gsap.fromTo(
            element,
            { autoAlpha: 0, y, filter: 'blur(12px)' },
            {
              autoAlpha: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.9,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 95%',
                once: true,
              },
            },
          )

          element.style.setProperty('--reveal-index', String(index))
        })

      gsap.utils
        .toArray<HTMLElement>('[data-gsap-item]')
        .forEach((element) => {
          const delay = Number(element.dataset.gsapDelay ?? 0)

          element.classList.remove('animate-fade-up')
          element.style.animation = 'none'

          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 34, scale: 0.98 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.72,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 95%',
                once: true,
              },
            },
          )
        })

      gsap.utils
        .toArray<HTMLElement>('[data-scroll-parallax]')
        .forEach((element) => {
          const depth = Number(element.dataset.scrollParallax ?? 80)

          gsap.to(element, {
            y: depth,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.7,
            },
          })
        })

      sections.slice(1).forEach((section) => {
        gsap.fromTo(
          section,
          { backgroundPosition: '50% 0%' },
          {
            backgroundPosition: '50% 100%',
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })

      ScrollTrigger.refresh()
    })

    return () => {
      context.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return null
}
