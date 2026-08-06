'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { partners } from '@/lib/site'
import { cn } from '@/lib/utils'

function PartnerLogo({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-4 px-10">
      <div className="relative h-20 w-44 sm:h-24 sm:w-52 lg:h-28 lg:w-56">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 220px, (max-width: 1024px) 208px, 224px"
        />
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {partner.category}
      </span>
    </div>
  )
}

export function PartnersSection({
  className,
  surface = 'muted',
}: {
  className?: string
  surface?: 'muted' | 'background'
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Duplicate partners for seamless marquee loop
  const marqueeItems = [...partners, ...partners, ...partners]

  return (
    <>
      <style>{`
        .partners-marquee {
          display: flex;
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
        }
        .partners-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .partners-fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .partners-fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="partners"
        className={cn(
          'partners-fade-in overflow-hidden border-b border-border py-20 lg:py-28',
          surface === 'muted' ? 'bg-muted/40' : 'bg-background',
          isVisible && 'visible',
          className,
        )}
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our partners"
            title="Institutional support around the operating platform"
            description="Global RE's compliance board identifies partner categories supporting capital, assurance, systems, banking, and technology operations."
          />
        </div>

        {/* Marquee container */}
        <div className="mt-14 overflow-hidden">
          <div className="partners-marquee">
            {marqueeItems.map((partner, i) => (
              <PartnerLogo key={`${partner.category}-${i}`} partner={partner} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
