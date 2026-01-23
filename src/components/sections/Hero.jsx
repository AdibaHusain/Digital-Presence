import { useState } from "react"
import {ChevronDown, Star} from 'lucide-react'
import {SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb} from 'react-icons/si'
import { PERSONAL_INFO, STATS} from "../../utils/constants"
import {scrollToSection} from '../../hooks/UseScrollSpy';
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackground variant="hero" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column-Content */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-slate-700 via-sky-700 to-cyan-700 border border-slate-500 rounded-full">

                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.tagline} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                Adiba Husain — My Digital Space
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-[550px] mb-8">
                A computer science student passionate about building thoughtful, reliable software. I enjoy learning by creating and believe good code should feel as intuitive as it is efficient.
                </p>
            </FadeIn>
            <FadeIn delay={300}>
              <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-0 mb-12 group">
                    <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white">
                      Get In Touch
                    </div>
                  </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat,index) =>(
                  <div key={index} className="text-left border-r border-white/50 pr-10 last:border-r-0">
                    <div className="text-2xl font-normal text-sky-700 mb-[8px] font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>          

          </div>

        </div>

    </section>
  )
}

export default Hero
