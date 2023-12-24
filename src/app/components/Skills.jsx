import React from 'react'
import { SiTailwindcss, SiNextdotjs, SiReact, SiBootstrap, SiHtml5, 
    SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
    SiPostgresql, SiPython } from "react-icons/si";

import { DiJava } from "react-icons/di";

const skills = [
    {
        id: 1,
        title: "Frontend",
        skills: [
            {
                id: 1,
                name: "React",
                image: [<SiReact className='text-4xl' />]
            },
            {
                id: 2,
                name: "Next.js",
                image: [<SiNextdotjs className='text-4xl' />]
            },
            {
                id: 3,
                name: "Tailwind",
                image: [<SiTailwindcss className='text-4xl' />]
            },
            {
                id: 4,
                name: "Bootstrap",
                image: [<SiBootstrap className='text-4xl' />]
            },
            {
                id: 5,
                name: "HTML",
                image: [<SiHtml5 className='text-4xl' />]
            },
            {
                id: 6,
                name: "CSS",
                image: [<SiCss3 className='text-4xl' />]
            },
            {
                id: 7,
                name: "JavaScript",
                image: [<SiJavascript className='text-4xl' />]
            }
        ]
    },
    {
        id: 2,
        title: "Backend",
        skills: [
            {
                id: 1,
                name: "Node.js",
                image: [<SiNodedotjs className='text-4xl' />]
            },
            {
                id: 2,
                name: "Express",
                image: [<SiExpress className='text-4xl' />]
            },
            {
                id: 3,
                name: "MongoDB",
                image: [<SiMongodb className='text-4xl' />]
            },
            {
                id: 4,
                name: "MySQL",
                image: [<SiMysql className='text-4xl' />]
            },
            {
                id: 5,
                name: "PostgreSQL",
                image: [<SiPostgresql className='text-4xl' />]
            },
            {
                id: 6,
                name:"Python",
                image: [<SiPython className='text-4xl' />]
            },
            {
                id: 7,
                name: "Java",
                image: [<DiJava className='text-4xl' />]
            }
        ]
    },
    {
        id: 3,
        title: "Other",
        skills: [
            {
                id: 1,
                name: "Git",
                image: [<SiReact className='text-4xl' />]
            },
            {
                id: 2,
                name: "GitHub",
                image: [<SiNextdotjs className='text-4xl' />]
            },
            {
                id: 3,
                name: "VS Code",
                image: [<SiTailwindcss className='text-4xl' />]
            },
            {
                id: 4,
                name: "Figma",
                image: [<SiBootstrap className='text-4xl' />]
            },
            {
                id: 5,
                name: "Adobe XD",
                image: [<SiHtml5 className='text-4xl' />]
            },
            {
                id: 6,
                name: "Adobe Photoshop",
                image: [<SiCss3 className='text-4xl' />]
            },
            {
                id: 7,
                name: "Adobe Illustrator",
                image: [<SiJavascript className='text-4xl' />]
            }
        ]
    }
]

const Skills = () => {
    return (
        <div>
            <div>
                <div className='title text-3xl text-center font-semibold mb-8'>
                    Skills
                </div>
                <div className='skills-container flex w-full h-full gap-7 overflow-auto'>
                    {skills.map((skill) => (
                        <div className='flex w-full h-full'>
                            <div key={skill.id} className='skill flex flex-col w-[40rem] h-80 border rounded-2xl px-7 py-5 '>
                                <div className='skill-title text-xl font-medium mb-5 text-center'>
                                    {skill.title}
                                </div>
                                <div className='skill-list flex justify-center flex-wrap gap-3 mb-5'>
                                    {skill.skills.map((item) => (
                                        <div key={item.id} className='skill-item flex items-center justify-center gap-2 text-base font-normal border rounded-xl px-5 py-3'>
                                            {item.image}
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
        
                </div>
            </div>
        </div>
    )
}

export default Skills