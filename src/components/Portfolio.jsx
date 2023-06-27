/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Section from './common/Section';

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import robo from "../assets/robo.png";

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            title: "Creative Mobile Project",
            image: p1,
            github: "https://github.com/nodejs/node",
            demo: "https://google.com",
        },
        {
            id: 2,
            title: "Ui/Ux Design Project",
            image: p2,
            github: "https://github.com/nodejs/node",
            demo: "https://google.com",
        },
        {
            id: 3,
            title: "Backend Development Project with Databse",
            image: p3,
            github: "https://github.com/nodejs/node",
            demo: "https://google.com",
        },
        {
            id: 4,
            title: "Ecomm Landing Page",
            image: p4,
            github: "https://github.com/nodejs/node",
            demo: "https://google.com",
        },
        {
            id: 5,
            title: "Business Logic Landing Page",
            image: p5,
            github: "https://github.com/nodejs/node",
            demo: "https://google.com",
        },
        {
            id: 6,
            title: "Art Design Project",
            image: p6,
            github: "https://github.com/nodejs/node",
            demo: "https://google.com",
        },

    ];

    return (




        <Section title={
            <div className="flex items-center">
                <img src={robo} alt="Robot" className="w-10 h-10 mr-2" />
                Portfolio
            </div>
        }
            subtitle="These are all the projects that I have worked on. I have included most of my projects from earlier days, so be gentle with them 😀" >

            <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>

                {projects.map(({ id, title, image, github, demo, }) => (
                    <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
                        <img src={image} alt={title} className='w-2/3' />
                        <div className='w-1/3 flex flex-col items-center justify-evenly p-1 hover:bg-cyan-400'>
                            <h2>{title}</h2>
                            <a className='text-2xl cursor-pointer duration-150 hover:sale-110'
                                href={github} target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a
                                className='text-2xl cursor-pointer duration-150 hover:sale-110'
                                href={demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkSquareAlt /></a>
                        </div>
                    </div>
                ))}

            </div>
        </Section >

    )
};

export default Portfolio;