import React, { useEffect } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import Avatar from './Avatar';
import TypewriteHero from './TypewriteHero';


const Hero = () => {

    const text = [
        'Hello ',
        '👋🏾',
        ', welcome to my site. I am a frontend software engineer. I love to write code and work on projects.',
      ];


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

    useEffect(() => {
        const handleScroll = () => {
            const downArrow = document.querySelector('.down-arrow');

            if (downArrow && window.scrollY >= 90) {
                downArrow.classList.add('hide-down-arrow');
            } else if (downArrow) {
                downArrow.classList.remove('hide-down-arrow');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    


    return (
        <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
            <h2 className='text-5xl text-cyan-400 uppercase font-bold'>Huey io</h2>

            <h3 className='py-3 text-2xl'>FrontEnd Developer</h3>
            <span className='text-cyan-400'>
        <TypewriteHero words={text} typingSpeed={300} deletionDelay={1700} />
      </span>
      <p className='max-w-xl font-light text-gray-500'>
        Hello <span className='animate-pulse text-4xl'>👋🏾</span>, welcome to my site. I am a frontend software
        engineer. I love to write code and work on projects.
      </p>
          


            {/* Social Icons */}
            <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
                {SOCIAL.map(({ id, url, icon }) => (
                    <a
                        href={url}
                        key={id}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='cursor-pointer duration-300 hover:text-cyan-400'
                    >
                        {icon}
                    </a>
                ))}
            </div>

            {/* Avatar And Resume */}
            <div>
                <img
                    src={Avatar}
                    alt='avatar'
                    className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-cyan-400 rounded-xl pt-5'
                />

                <a href='/huey-resume.pdf' download className='flex items-center justify-center mt-10 bg-gradient-to-r from-cyan-400 to-slate-400 text-slate-50 py-2 rounded-lg'>
                    Resume
                </a>
            </div>

            {/* Arrow Down Animation */}
            <div className='mt-10 down-arrow'>
                <FaArrowDown className='text-gray-400 text-xl animate-bounce' />
            </div>
        </section>
    );
};

export default Hero;