import styled from 'styled-components';
import About from '../components/About';
import Education from '../components/Education';
import BlogShorts from '../components/BlogShorts';
import News from '../components/News';
import OpenSourceProjectsContainer from '../containers/opensourceprojects/OpenSourceProjectsContainer';
import WhatIDo from '../components/WhatIDo';
import '../components/Components.css';

const SectionWrapper = styled.div`
    margin-left: 1.9rem;
    margin-right: 1.9rem;
    margin-top: 2.5rem;
    margin-bottom: 1.9rem;
    font-size: 25px;
`;

const HomePage = () => {
    return (
        <>
        <SectionWrapper id="about">
            <About/>
        </SectionWrapper>

        <SectionWrapper id="whatido">
            <h3>What I Do</h3>
            <WhatIDo/>
        </SectionWrapper>

        <SectionWrapper id="news">
            <h3>News</h3>
            <News/>
        </SectionWrapper>

        <SectionWrapper id="opensourceprojects">
            <OpenSourceProjectsContainer/>
        </SectionWrapper>

        <SectionWrapper id="blog">
            <BlogShorts/>
        </SectionWrapper>

        <SectionWrapper id="education">
            <Education/>
        </SectionWrapper>
            

        </>
    );
};

export default HomePage;