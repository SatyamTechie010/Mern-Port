import React, { useEffect } from 'react';
import './firstsection.css';
import bgImage from './bg.png';
import Typed from 'typed.js';

const FirstSection = () => {
    useEffect(() => {
        const options = {
            strings: ["Web Developer", "Graphics Designer", "Video Editor"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };

        // Initialize Typed.js
        const typed = new Typed("#element", options);

        // Cleanup function
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="firstSection">
            <div className="leftSection">
                Hi, My name is <span className="purple">Satyam</span>
                <div>and I am a passionate</div>
                <span id="element"></span>
                <div className="buttons">
                    <button className="btn" onClick={() => window.open('link-to-resume.pdf', '_blank')}>Download Resume</button>
                    <button className="btn" onClick={() => window.open('https://github.com/your-username', '_blank')}>Visit Github</button>
                </div>
            </div>
            <div className="rightSection">
                <img src={bgImage} alt="Background" />
                <hr className="custom-hr" />
            </div>
        </section>

    );
};

export default FirstSection;
