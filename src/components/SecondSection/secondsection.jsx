import React from 'react';
import './SecondSection.css';
import HtmlImage from './HTML5.png';
import NodeImage from './nodejs.png';
import ReactImage from './React.png';

const SecondSection = () => {
  const workExperience = [
    {
      title: 'HTML Developer (2010-2012)',
      image: HtmlImage,
      description: 'Worked on building web layouts and static websites using HTML5, CSS3, and JavaScript.',
    },
    {
      title: 'Node.js Developer (2012-2014)',
      image: NodeImage,
      description: 'Built server-side applications using Node.js, with a focus on APIs and backend functionality.',
    },
    {
      title: 'React Developer (2014-2018)',
      image: ReactImage,
      description: 'Developed interactive and dynamic web applications using React and related libraries.',
    },
    {
      title: 'Full Stack Developer (2018-2020)',
      image: HtmlImage,
      description: 'Implemented end-to-end features using the MERN stack and RESTful APIs.',
    },
    {
      title: 'Senior Developer (2020-Present)',
      image: NodeImage,
      description: 'Leading a team of developers, overseeing projects, and ensuring code quality and performance.',
    },
  ];

  return (
    <section className="SecondSection">
      <span className="text-grey">What I have done so far</span>
      <h1>Work Experience</h1>
      <div className="horizontal-line"></div>
      <div className="experience-container">
        {workExperience.map((experience, index) => (
          <div className="vertical" key={index}>
            <div className="vertical-line"></div>
            <img src={experience.image} alt={experience.title} />
            <div className="vertical-title">{experience.title}</div>
            <div className="vertical-desc">{experience.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
