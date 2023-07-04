import React from 'react'
import Section from './common/Section'

import commerce from "../assets/commerce.png";
import research from "../assets/research.png";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import skills from "../assets/skill.png";

const Services = () => {

    const services = [
        {
            id: 1,
            title: "ECommerce Webservices",
            description: "",
            image: commerce
        },
        {
            id: 2,
            title: "Web Development",
            description: "",
            image: web
        },
        {
            id: 3,
            title: "Mobile Development",
            description: "",
            image: mobile
        },
        {
            id: 4,
            title: "Research & Development",
            description: "",
            image: research
        },
    ];

    return (
        <Section title={

            <div className="flex flex-shrink-0">
                <img src={skills} alt="skills" className="w-10 h-10 mr-2" />
                Services
            </div>
        }
            subtitle="Here are the services I provide to my clients. If there is anything you are looking for that is not here, please send me an email.">


            <div className="grid gap-10 lg:grid-cols-2 ">
                {services.map(({ id, image, title }) => (
                    <div key={id} className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:sale-110 hover:bg-cyan-400">
                        <img src={image} alt={title} className=" w-36 h-36 md:w-44 md:h-44 object-contain " />
                        <h3 className='mt-5 text-base'>{title}</h3>
                    </div>
                ))}


            </div>
        </Section>
    );
};

export default Services;