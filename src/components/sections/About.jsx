// import React from 'react'
// import RevealOnScroll from '../RevealOnScroll'
import { skills } from '/src/data/skills'

 
// const About = () => {
//   return (
//     <section id='about' className='min-h-screen flex items-center justify-center py-20'>
//         <RevealOnScroll>
//         <div className='max-w-4xl mx-auto px-4'>
//             <h2 className='text-3xl font-bold mb-8 bg-gradient-to-l from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>About Me</h2>
//             <div className='rounded-xl p-8 border-white/10 border transition-all'>
//                 <p className='text-gray-300 mb-6'>
//                     I'm a Computer Science student at Newton School of Technology
//                     with a strong foundation in full-stack development and Data 
//                     Structures & Algorithms. Passionate about solving real-world
//                     problems through code, I enjoy building scalable web applications
//                     that blend functionality with great user experience.
//                 </p>
//                 <div className='grid grid-cols-1 gap-6'>
//                     <div className="rounded-xl p-6 transition-all border border-white/10">
//                         <h3 className="text-xl font-bold mb-4 text-center">Skills</h3>
//                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
//                             {skills.map((tech, key) => (
//                             <div
//                                 key={key}
//                                 className={`flex flex-col items-center p-4 rounded-lg bg-gray-900/40 border border-white/10 hover:translate-y-1 transition-all ${tech.color}`}
//                             >
//                                 <img
//                                 src={tech.logo}
//                                 alt={tech.name}
//                                 className="w-10 h-10 mb-2 transition-transform transform hover:scale-110"
//                                 />
//                                 <span className="text-gray-200 font-medium">{tech.name}</span>
//                                 <span className="text-sm text-gray-400">{tech.level}</span>
//                             </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
//                     <div className='p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all'>
//                         <h3 className='text-xl font-bold mb-4 text-center'> Education </h3>
//                         <ul className='list-disc list-inside text-gray-300 space-y-2'>
//                             <li>
//                                 <strong>B.Tech in CSE (AI & ML)</strong>- NST Pune 
//                             </li>
//                             <li>
//                                 Relevant Coursenetwork: Data Structures, Web development...
//                             </li>
//                         </ul>
//                     </div>
//                     <div className='p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all'>
//                         <h3 className='text-xl font-bold mb-4 text-center'> Work Experience </h3>
//                         <div className='space-y-4 text-gray-400 mt-5'>
//                             <div>
//                                 <h4 className='font-semibold'>
//                                     Software Engineer at ABC Corp (2020 - present)
//                                 </h4>
//                                 <p>Developed and maintained microserveices for cloud-based</p>
//                             </div>
//                         </div>
//                         <div className='space-y-4 text-gray-400 mt-5'>
//                             <div>
//                                 <h4 className='font-semibolds'>
//                                     Intern at DEF Startups (2019)
//                                 </h4>
//                                 <p>Assisted in building front-end components and integrated REST APIs</p>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//         </div>
//         </RevealOnScroll>

//     </section>
//   )
// }

// export default About

import React from 'react';
import { timeline } from '/src/data/timeline';



const About = () => {
  return (
    <section id="about" className="w-full min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto py-20">
        <h2  className='text-3xl font-bold mb-8 bg-gradient-to-l from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>About Me</h2>
        <div className="grid grid-cols-1s md:grid-cols-2 gap-16">
            <div className='space-y-8 rounded-xl p-6 transition-all border border-white/10'>
                <h3 className="text-xl font-bold text-cyan-600 text-center">Skillset</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mx-auto">
                    {skills.map((tech, key) => (
                    <div
                        key={key}
                        className={`flex flex-col items-center p-6 rounded-xl border border-white/10 bg-blue-500/5 hover:translate-y-1 
                                hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                                transition`}
                    >
                        <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-10 h-10 mb-2 transition-transform transform hover:scale-110"
                        />
                        <span className="text-blue-500/50 font-bold">{tech.name}</span>
                        <span className="text-sm text-gray-400">{tech.level}</span>
                    </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8 ">
                <h3 className="text-xl font-bold text-cyan-600 text-center">Education & Experience</h3>
                <div className="space-y-6">
                    {timeline.map((item, index) => (
                        <div 
                            key={index} 
                            className="group relative border-l-2 border-gray-200 pl-6 pb-6 hover:border-gray-400 transition-colors"
                            >
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-2 border-blue-500/50 transition-colors"></div>
                            
                            <div className="space-y-2">
                                <span className="text-sm font-medium text-gray-500">{item.year}</span>
                                <h4 className="text-lg font-bold text-blue-500/80">{item.title}</h4>
                                <p className="text-gray-400 font-medium">{item.organization}</p>
                                <p className="text-gray-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;