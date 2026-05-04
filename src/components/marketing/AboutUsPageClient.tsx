'use client'

import { BlurFade } from '@/components/magicui/blur-fade'
import { DotPattern } from '@/components/magicui/dot-pattern'
import { Container } from '@/components/shared/Container'

export function AboutUsPageClient() {
  return (
    <>
      {/* ── Section 1: The Friction ── */}
      <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        <Container className="max-w-3xl">
          <BlurFade inView delay={0.1}>
            <p className="font-geist text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              About Us
            </p>
          </BlurFade>

          <BlurFade inView delay={0.15}>
            <h1 className="mt-4 font-poppins text-3xl font-bold leading-[1.1] tracking-[-0.04em] text-gray-900 sm:text-4xl lg:text-5xl">
              Most companies invest in care. Most employees never feel it.
            </h1>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <p className="mt-6 font-geist text-lg leading-relaxed text-gray-600 sm:text-xl">
              The problem isn&apos;t budget — it&apos;s friction. Benefits are often the wrong fit,
              too hard to find, or too painful to claim. When support stays trapped in a portal,
              employees feel unsupported and employers feel unheard.
            </p>
          </BlurFade>

          <BlurFade inView delay={0.25}>
            <p className="mt-4 font-geist text-lg leading-relaxed text-gray-600 sm:text-xl">
              Welluber exists to close that gap — making benefits as intuitive as a conversation,
              not a PDF nobody opens.
            </p>
          </BlurFade>
        </Container>
      </section>

      {/* ── Section 2: The Pulled Quote + Image ── */}
      <section className="relative overflow-hidden bg-brand-faint">
        <DotPattern
          width={24}
          height={24}
          cx={1}
          cy={1}
          cr={1}
          className="fill-brand/[0.04]"
        />

        <div className="lg:grid lg:grid-cols-2">
          {/* Left: Quote */}
          <div className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="mx-auto w-full max-w-[1200px]">
              <div className="max-w-2xl">
                {/* Decorative quotation mark */}
                <BlurFade inView delay={0.1}>
                  <span
                    aria-hidden="true"
                    className="absolute -top-4 left-4 font-poppins text-[160px] font-bold leading-none text-brand/[0.06] sm:-top-8 sm:left-8 sm:text-[220px] lg:left-[60px]"
                  >
                    &ldquo;
                  </span>
                </BlurFade>

                <BlurFade inView delay={0.15}>
                  <div className="relative border-l-[3px] border-brand pl-6 sm:pl-8">
                    <p className="font-poppins text-2xl font-bold leading-[1.2] text-brand sm:text-3xl lg:text-[42px]">
                      We aren&apos;t just managing perks; we&apos;re restoring the pulse of the modern
                      workplace. We make sure that when a company says &ldquo;we care,&rdquo; the
                      employee actually feels it.
                    </p>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>

          {/* Right: Image — stretches full row height, content at bottom */}
          <div className="hidden lg:flex lg:flex-col lg:justify-end lg:pt-8 lg:px-8">
            <img
              src="/img-wu-aboutus.webp"
              alt="Welluber team"
              className="w-full object-contain"
              draggable={false}
            />
          </div>
        </div>

        {/* Mobile: Full-width image below quote */}
        <div className="px-4 pt-6 lg:hidden sm:px-6 sm:pt-8">
          <img
            src="/img-wu-aboutus.webp"
            alt="Welluber team"
            className="w-full object-contain"
            draggable={false}
          />
        </div>
      </section>

      {/* ── Section 3: Our Lighthouse ── */}
      <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        <Container className="max-w-5xl">
          {/* Section header */}
          <BlurFade inView delay={0.1}>
            <p className="font-geist text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Our Lighthouse
            </p>
          </BlurFade>

          {/* Vision + Mission — side by side on desktop */}
          <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-2 lg:gap-16">
            <BlurFade inView delay={0.15}>
              <div className="border-t-2 border-brand-mid pt-6">
                <p className="font-geist text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                  Vision
                </p>
                <p className="mt-3 font-geist text-lg font-medium leading-relaxed text-gray-900 sm:text-xl">
                  A world where every employee actually feels the care their company invests in.
                </p>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <div className="border-t-2 border-brand-mid pt-6">
                <p className="font-geist text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                  Mission
                </p>
                <p className="mt-3 font-geist text-lg font-medium leading-relaxed text-gray-900 sm:text-xl">
                  Turn complicated corporate benefits into simple, human support that people use.
                </p>
              </div>
            </BlurFade>
          </div>

          {/* How We Do It — editorial numbered list */}
          <div className="mt-16 sm:mt-20">
            <BlurFade inView delay={0.1}>
              <p className="font-geist text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                How we do it
              </p>
            </BlurFade>

            <div className="mt-8 space-y-0">
              {[
                {
                  num: '01',
                  title: 'Connecting the Dots',
                  desc: 'Budget meets need. No translation required.',
                },
                {
                  num: '02',
                  title: 'Cutting the Noise',
                  desc: 'No jargon, no paperwork. Just support that\'s easy to find and easier to use.',
                },
                {
                  num: '03',
                  title: 'Being There',
                  desc: 'When life gets heavy, the right help is already waiting.',
                },
              ].map((item, i) => (
                <BlurFade key={item.num} inView delay={0.15 + i * 0.05}>
                  <div className="border-t border-gray-100 py-8 sm:py-10">
                    <div className="flex items-start gap-6 sm:gap-8">
                      <span
                        aria-hidden="true"
                        className="font-poppins text-4xl font-bold leading-none text-brand/10 sm:text-5xl"
                      >
                        {item.num}
                      </span>
                      <div className="min-w-0 flex-1 pt-1">
                        <h3 className="font-geist text-lg font-semibold text-gray-900 sm:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-1 font-geist text-base leading-relaxed text-gray-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
