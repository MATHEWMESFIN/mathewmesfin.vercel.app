import { SiTailwindcss, SiNextdotjs, SiReact, SiBootstrap, SiHtml5, 
    SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
    SiPostgresql, SiPython, SiPhp, SiSass, SiStyledcomponents } from "react-icons/si";

const projects = [
    {
        id: 1,
        title: "My Portfolio",
        description: "My personal portfolio website to showcase my skills, experience, and projects.",
        img: '/images/projects/portfolio-project.png',
        github: "https://github.com/MATHEWMESFIN/mathew-mesfin",
        link: "https://mathewmesfin.vercel.app/",
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
                name: "Styled-components",
                image: [<SiStyledcomponents />]
            },
            {
                id: 4,
                name: "JavaScript",
                image: [<SiJavascript />]
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
            }
        ]
    },
    {
        id: 2,
        title: "My-Fit",
        description: "Worked in a team using the Next.js 14 framework to design and develop a personal fitness website that allows users to track their workouts, and progress.",
        img: '/images/projects/fitness-project.png',
        github: "https://github.com/MATHEWMESFIN/Fitness-App",
        link: "https://my-fit-webapp.vercel.app/",
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
                name: "JavaScript",
                image: [<SiJavascript />]
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
                name: "PostgreSQL",
                image: [<SiPostgresql />]
            }
        ]
    },
    {
        id: 3,
        title: "TravelTroveAI",
        description: "Worked in a team using the Next.js 14 framework to design and develop a flight search booking app that integrates an AI chat feature.",
        img: '/images/projects/travel-project.png',
        github: "https://github.com/MATHEWMESFIN/travel-trove-ai",
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
                name: "JavaScript",
                image: [<SiJavascript />]
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
                name: "PostgreSQL",
                image: [<SiPostgresql />]
            }
        ]
    }
]

export default projects;