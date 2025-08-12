import React from 'react';
import Hero from '../Section/Hero';
import AboutMe from '../Section/About/AboutMe';
import Skills from '../Section/Skills/Skills';
import Education from '../Section/Education/Education';
import Projects from '../Section/Projects/Projects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
        </div>
    );
};

export default Home;