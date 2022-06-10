import React from 'react';
import About from './About';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Projects from './Projects';

const Home = () => {
    return (
        <section id="Home">
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </section>
    );
};

export default Home;