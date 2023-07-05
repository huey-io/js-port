import React from 'react';
import Section from './common/Section';
import SkillScript from './SkillScript';
import ToolScript from './ToolScript';
import book from '../assets/book.png';
import angular from '../assets/angular.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import python from '../assets/puthon.png';
import node from '../assets/nodejs.png';
import mysql from '../assets/mysql.png';
import mongo from '../assets/mongo.png';

const Skills = () => {
  const SKILLS = [
    {
      id: 1,
      image: python,
      name: 'Python',
    },
    {
      id: 2,
      image: tailwind,
      name: 'Tailwind CSS',
    },
    {
      id: 3,
      image: react,
      name: 'React',
    },
    {
      id: 4,
      image: angular,
      name: 'Angular',
    },
    {
      id: 5,
      image: node,
      name: 'Node.js',
    },
    {
      id: 6,
      image: mongo,
      name: 'MongoDB',
    },
    {
      id: 7,
      image: mysql,
      name: 'mySQL',
    },
  ];

  const Tools = () => {
    const TOOLS = [
      {
        id: 1,
        name: 'Vscode',
      },
      {
        id: 2,
        name: 'Npm',
      },
      {
        id: 3,
        name: 'Git',
      },
      {
        id: 4,
        name: 'Amazon Web Services',
      },
      {
        id: 5,
        name: 'Figma',
      },
      {
        id: 6,
        name: 'Canva',
      },
    ];

    const firstWordLength = TOOLS[0].name.length;
    const typingSpeed = 750 / firstWordLength; // Calculate typing speed dynamically

    return (
      <div>
        <h3 className="font-semibold">Tools:</h3>
        <span className="text-cyan-400">
          <ToolScript
            words={TOOLS.map(({ name }) => name)}
            typingSpeed={typingSpeed} // Use the calculated typing speed
            deletionDelay={1300} // Changed deletion delay to 1300ms
          />
        </span>
      </div>
    );
  };

  return (
    <Section
      title={
        <div className="flex items-center justify-center">
          <img src={book} alt="book" className="w-10 h-10 mr-2" />
          Skills
        </div>
      }
      subtitle="Below is a list of programming languages and technologies I use"
    >
      <div className="flex flex-col md:w-70 max-w-3xl mx-auto gap-8 p-4">
        <div className="flex flex-col md:w-70">
          <h2 className="text-2xl font-semibold mb-4 pr-3 md:p-2">Programming Languages</h2>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map(({ id, image, name }) => (
              <img key={id} src={image} alt={name} className="w-10 h-10" />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-96">
          <h2 className="text-2xl font-semibold mb-4">Information</h2>
          <div>
            <h3 className="font-semibold">Technologies:</h3>
            <span className="text-cyan-400 inline-block">
              <SkillScript
                words={SKILLS.map(({ name }) => name)}
                typingSpeed={750 / SKILLS[0].name.length} // Adjusted typing speed calculation
                deletionDelay={1300} // Changed deletion delay to 1300ms
              />
            </span>
          </div>
          <div className="mt-4">
            <Tools />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
