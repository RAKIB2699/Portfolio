import React from 'react';
import Hero from '../Section/Hero';
import AboutMe from '../Section/About/AboutMe';
import Skills from '../Section/Skills/Skills';
import Education from '../Section/Education/Education';
import Projects from '../Section/Projects/Projects';
import Contact from '../Section/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;