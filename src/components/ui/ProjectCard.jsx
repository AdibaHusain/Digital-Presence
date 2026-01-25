import React from 'react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

const ProjectCard = ({project}) => {
    const {title, description,image,category,technologies,githubUrl} = project;

  return (
    <div className='group relative bg-white/5 border border-white/10  rounded-2xl overflow-hidden hover:border-cyan-900 transition-all duration-300'>
        <div className='relative h-64 overflow-hidden'>
            <img
                src={image}
                alt={title}
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' />

            <div className='absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300' />

            <div className='absolute bottom-4 right04 flex items-centergap-3'>
                {githubUrl && (
                    <a
                      href={githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-cyan-950 hover:border-sky-500 transition-all duration-300 hover:scale-110 ml-4 mt-3'
                      title='ViewCode'>
                        <Github className='w-4 h-4 text-white' />
                      </a>
                )}
            </div>

            <div className='absolute top-4 left-4'>
                <span className='px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full'>
                    {project.category}
                </span>
            </div>
        </div>

        <div className='p-6 space-y-4'>
            <div>
                <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-sky-300 transition-colors duration-300'>
                    {title}
                </h3>
                <p className='text-white/60 text-sm leading-relaxed line-clamp-2'>
                    {description}
                </p>
            </div>

            <div className='flex flex-wrap gap-2'>
                {technologies.map((tech,index) => (
                    <span
                        key={index}
                        className='px-3 py-1 text-xs font-medium text-sky-200 bg-cyan-800 border border-cyan-700 rounded-lg hover:bg-cyan-700 transition-colors duration-200'>
                            {tech}
                        </span>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default ProjectCard
