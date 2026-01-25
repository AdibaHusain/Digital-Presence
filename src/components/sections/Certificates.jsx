import React from 'react'
import {certificates} from '../../data/certificates'
import * as Icons from 'lucide-react'
import {Wrench} from 'lucide-react'
import FadeIn from '../animations/FadeIn'

const Certificates = () => {
  return (
    <section id='certificates' className='relative py-20 bg-black overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900 opacity-20 rounded-full blur-3xl'/>
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900 opacity-20 rounded-full blur-3xl'/>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-950 opacity-20 rounded-full blur-3xl'/>
        </div>

        <div 
            className='absolute inset-0 opacity-[0.03]'
            style={{
                backgroundImage:`
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
            }} />

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <FadeIn delay={0}>
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 bg-cyan-950 border-sky-700 rounded-full mb-6'>
                        <Wrench className='w-4 h-4 text-sky-500'/>
                        <span className='text-sm text-sky-500 font-medium tracking-wider uppercase'>My Learning Sources</span>
                    </div>
                    <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4 max-w-2xl mx-auto'>
                        Certified. Skilled. Future-Ready.
                    </h2>
                    <p className='text-lg text-white/60 max-w-xl mx-auto'>
                        Industry-recognized certifications and hands-on learning experiences that strengthen my technical foundation and real-world problem-solving skills.
                    </p>
                </div>
            </FadeIn>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
                {certificates.slice(0,2).map((certificate,index) =>{
                    const IconComponent = Icons[certificate.icon] || Icons.Code2;
                    return (
                        <FadeIn key={certificate.id} delay={100+index*100}>
                            <div className='group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-sky-800 transition-all duration-300 h-full min-h-[280px] flex flex-col'>
                                <div className='mb-6'>
                                    <div className='w-16 h-16 rounded-2xl bg-cyan-800 border border-sky-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <IconComponent className='w-8 h-8 text-sky-600'/>
                                    </div>
                                </div>

                                <div className='flex-1'>
                                    <h3 className='text-2xl font-semibold text-white mb-3 group-hover:text-sky-600 transition-colors duration-300'>
                                        {certificate.title}
                                    </h3>
                                    <p className='text-white/60 leading-relaxed'>
                                        {certificate.description}
                                    </p>
                                </div>

                                <div className='
                                absolute inset-0 
                                bg-linear-to-br 
                                from-slate-500/0 via-blue-500/0 to-cyan-400/0 
                              group-hover:from-slate-500/10 
                              group-hover:via-blue-500/10 
                              group-hover:to-cyan-400/10 
                                rounded-3xl 
                                transition-all duration-300 
                                pointer-events-none
                                ' />          
                            </div>
                        </FadeIn>
                    );
                })}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {certificates.slice(2).map((certificate, index) =>{
                    const IconComponent = Icons[certificate.icon] || Icons.Code2;
                    return (
                        <FadeIn key={certificate.id} delay={300+index*100}>
                            <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-800 transition-all duration-300 h-full'>
                                <div className='mb-4'>
                                    <div className='w-12 h-12 rounded-xl bg-cyan-800 border border-sky-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <IconComponent className='w-6 h-6 text-sky-600'/>
                                    </div>
                                </div>

                                <div>
                                    <h3 className='text-lg font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300'>
                                        {certificate.title}
                                    </h3>
                                    <p className='text-white/60 leading-relaxed line-clamp-3'>
                                        {certificate.description}
                                    </p>
                                </div>

                                <div className='absolute inset-0 bg-linear-to-br from-slate-500/0 via-blue-500/0 to-cyan-400/0 group-hover:from-slate-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-400/10 rounded-3xl transition-all duration-300 pointer-events-none '/>
                            </div>
                        </FadeIn>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Certificates
