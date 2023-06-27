import React from 'react';
import Section from "./common/Section"
import { FaTwitter, FaGithub, FaLinkedin, } from 'react-icons/fa'
import contact from "../assets/mobile.png"

const Contact = () => {

    const SOCIAL = [
        {
            id: 1,
            icon: <FaTwitter />,
            url: 'https://www.twitter.com/',
        },
        {
            id: 2,
            icon: <FaGithub />,
            url: 'https://www.github.com/',
        },
        {
            id: 3,
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/',
        },
    ];


    return (
        <Section title="Contact 📞" subtitle="Get in contact with me">

            <div className="flex flex-col items-center justify-center gap-8 text-center">
                <div>

                    <img src={contact} alt="contact info" className="w-32 h-32" />
                </div>
                <div>
                    <p className="max-w-xs md:max-w-lg font-extralight">I am open to talk regarding freelancing or full-time opportunities. Feel Free to contact me using your preferred method.</p>
                </div>
                <div className="flex w-full items-center justify-evenly text-3xl">
                    {SOCIAL.map(({ id, link, icon }) => (

                        <a href={link} target='_blank' rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-cyan-400'>{icon}</a>
                    ))}
                </div>
                {/* Bottom Form */}
                <div className='p-8 text-left w-full'>
                    <form action="" method='POST'>
                        <div className="w-full">
                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-sm py-2 font-extralight'>name</label>
                                <input type='text' name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />

                            </div>

                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2 my-2 font-extralight'>email</label>
                                <input type='text' name='email' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />

                            </div>


                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2 font-extralight'>phone</label>
                                <input type='text' name='phone' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />

                            </div>

                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2 font-extralight'>message</label>
                                <textarea name='message' rows='10' placeholder='Message me' className=' border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'></textarea>

                            </div>
                        </div>

                        <div className="flex items-center justify-center">

                            <button className='my-8 bg-gradient-to-r from-cyan-400 to-zinc-700 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover":scale-105 duration2-00'>send message</button>
                        </div>
                    </form>
                </div>

            </div>

        </Section>
    );
};

export default Contact;