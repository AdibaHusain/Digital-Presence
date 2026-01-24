import React from 'react'
import {Download, Code2, Sparkles} from 'lucide-react'
import {SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb, SiBootstrap} from 'react-icons/si'
import { PERSONAL_INFO, ABOUT_STATS } from "../../utils/constants"
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
const About = () => {
  const skills =[
    {name: 'React', icon: SiReact, color: '#61DAFB'},
    {name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4'},
    {name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E'},
    {name: 'Node.js', icon: SiNodedotjs, color: '#339933'},
    {name: 'MongoDB', icon: SiMongodb, color: '#47A248'},
    {name: 'BootStrap', icon: SiBootstrap, color: '#7952B3'},

  ];
  return (
    <section id='about' className='relative py-20 bg-black overflow-hidden'>
      <RadialGradientBackground variant="about" />
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/*Main Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
          {/* Left column -Content */}
           <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>
              <FadeIn delay={60}>
                <div className='inline-flex items-center gap-2.5 px-5 py-2.5 border border-sky-200 bg-cyan-700 rounded-full w-fit'>
                  <Code2 className='w-4 h-4 text-sky-200' />
                  <span className='text-sm text-sky-200 font-medium'>
                    Full Stack Developer
                  </span>
                  <Sparkles className='w-4 h-4 text-sky-200' />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className='text-4xl lg:text-5xl font-normal text-white leading-tight'>
                  Crafting Digital Experiences that matter.
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div className='flex flex-col gap-4'>
                  {PERSONAL_INFO.bio.map((paragraph, index) =>(
                    <p key={index} className='text-base text-white/70 leading-relaxed'>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={300}>
              <div className='grid grid-cols-3 gap-8'>
                {ABOUT_STATS.map((stat, index) =>(
                  <div key={index} className='relative'>
                    <div className='absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-slate-700 via-sky-700 to-cyan-700 rounded-full'></div>
                    <div className='text-3xl font-normal text-white mb-2 font-mono'>
                      {stat.value}
                    </div>
                    <p className='text-sm text-white/60 leading-snug'>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn> 

            <FadeIn delay={400}>
              <button
                  onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                  className='inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group'>
                    <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300' />
                    Download Resume
              </button>
            </FadeIn>
           </div>
           {/*Right Column - Info Grid*/}
           <FadeIn delay={200}>
            <div className='grid grid-cols-2 gap-4'>
              <div className='col-span-2 relative group'>
                <div className='absolute inset-0 bg-linear-to-br from-sky-900 to-cyan-900 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>

                <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-900 transition-all duration-300'>
                  <div className='flex items-start gap-4'>
                    <div className='p-3 bg-cyan-950 rounded-xl'>
                      <Code2 className='w-6 h-6 text-sky-600' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-lg font-semibold text-white mb-2'>Foundation & Skills</h3>
                      <p className='text-sm text-white/70 leading-relaxed'>
                      Solid understanding of web fundamentals and modern tools, with hands-on experience through real projects. I focus on learning by building, improving with feedback, and writing code that actually solves problems.</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className='relative group'>
                <div className='absolute inset-0 bg-linear-to-br from-sky-900 to-cyan-900 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-800 transition-all duration-300 h-full'>
                  <div className='p-3 bg-cyan-950 rounded-xl w-fit mb-4'>
                    <Sparkles className='w-5 h-5 text-sky-600' />
                  </div>
                  <h3 className='text-base font-semibold text-white mb-2'> Clean & Readable Code</h3>
                  <p className='text-sm text-white/70 leading-relaxed'>
                  Code that’s easy to read, easy to grow! <br></br>
I believe good code is not just working code. I write structured, readable, and well-organized code so that projects stay easy to maintain and scale as features grow.
                  </p>
                </div>
              </div>
              <div className='relative group'>
                  <div className='absolute inset-0 bg-linear-to-br from-sky-900 to-cyan-900 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                  <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-800 transition-all duration-300 h-full'>
                    <div className='p-3 bg-cyan-950 rounded-xl w-fit mb-4'>
                      <Download className='w-5 h-5 text-sky-600' />
                    </div>
                    <h3 className='text-base font-semibold text-white mb-2'>Performance & UX Focus</h3>
                    <p className='text-sm text-white/70 leading-relaxed'>
                      Smooth experiences matter!<br></br>
I pay attention to performance, responsiveness, and user experience—optimizing layouts, animations, and interactions so applications feel fast, smooth, and intuitive.
                    </p>
                  </div>
              </div>

              <div className='col-span-2 relative group'>
                <div className='absolute inset-0 bg-linear-to-br from-sky-900 to-cyan-900 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-800 transition-all duration-300 h-full'>
                  <div className='grid grid-cols-3 gap-6 text-center'>
                    <div>
                        <div className='text-2xl font-bold text-sky-200 mb-1'>Consistent</div>
                        <div className='text-xs text-white/60'>Focused • Disciplined</div>
                    </div>
                  <div>
                      <div className='text-2xl font-bold text-sky-200 mb-1'>Curious</div>
                      <div className='text-xs text-white/60'>Explorative • Growth-Driven</div>
                  </div>
                <div>
                  <div className='text-2xl font-bold text-sky-200 mb-1'>Reliable</div>
                  <div className='text-xs text-white/60'>Responsible • Trust-worthy</div>
                </div>
            </div>
          </div>
          </div>
          </div>
           </FadeIn>
        </div>

        {/*Skill Grid Section*/}
        <FadeIn delay={500}>
          <div className='flex flex-col items-center gap-8'>
            <div className='text-center'>
              <h3 className='text-2xl font-normal text-white mb-2'>
                Tech Stack & Expertise
              </h3>
              <p className='text-sm text-white/60'>
                Technologies I work with to build amazing products.
              </p>
            </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl'>
                   {skills.map((skill,index) =>(
                    <div
                       key={index}
                       className='group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105'>
                          <skill.icon className='text-3xl text-sky-700' />
                          <div className='text-sm text-white/80 font-medium text-center'>
                            {skill.name}
                          </div>

                          {/* Hover Glow Effect*/}
                          <div className='absolute inset-0 bg-linear-to-br 
from-sky-200/20 to-sky-200/20 
group-hover:from-sky-400/30 group-hover:to-sky-200/10 
rounded-2xl transition-all duration-300'>
</div>

                        </div>
                   ))}
                </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default About
