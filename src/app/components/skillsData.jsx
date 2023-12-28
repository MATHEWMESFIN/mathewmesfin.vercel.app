import { SiTailwindcss, SiNextdotjs, SiReact, SiBootstrap, SiHtml5, 
    SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
    SiPostgresql, SiPython, SiPhp, SiSass } from "react-icons/si";

import { DiJava } from "react-icons/di";

const skills = [
    {
        id: 1,
        title: "Frontend",
        skills: [
            {
                id: 1,
                name: "React",
                image: [<SiReact />]
            },
            {
                id: 2,
                name: "Next.js",
                image: [<SiNextdotjs />]
            },
            {
                id: 3,
                name: "Tailwind",
                image: [<SiTailwindcss />]
            },
            {
                id: 4,
                name: "Bootstrap",
                image: [<SiBootstrap />]
            },
            {
                id: 5,
                name: "HTML",
                image: [<SiHtml5 />]
            },
            {
                id: 6,
                name: "CSS",
                image: [<SiCss3 />]
            },
            {
                id: 7,
                name: "JavaScript",
                image: [<SiJavascript />]
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
                image: [<SiNodedotjs />]
            },
            {
                id: 2,
                name: "Express",
                image: [<SiExpress />]
            },
            {
                id: 3,
                name: "MongoDB",
                image: [<SiMongodb />]
            },
            {
                id: 4,
                name: "MySQL",
                image: [<SiMysql />]
            },
            {
                id: 5,
                name: "PostgreSQL",
                image: [<SiPostgresql />]
            },
            {
                id: 6,
                name:"Python",
                image: [<SiPython />]
            },
            {
                id: 7,
                name: "Java",
                image: [<DiJava />]
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
                image: [<SiReact />]
            },
            {
                id: 2,
                name: "GitHub",
                image: [<SiNextdotjs />]
            },
            {
                id: 3,
                name: "VS Code",
                image: [<SiTailwindcss />]
            },
            {
                id: 4,
                name: "Figma",
                image: [<SiBootstrap />]
            },
            {
                id: 5,
                name: "Adobe XD",
                image: [<SiHtml5 />]
            },
            {
                id: 6,
                name: "Adobe Photoshop",
                image: [<SiCss3 />]
            },
            {
                id: 7,
                name: "Adobe Illustrator",
                image: [<SiJavascript />]
            }
        ]
    }
]

export default skills