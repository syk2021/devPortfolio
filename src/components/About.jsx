import styled from 'styled-components';
import palette from '../lib/palette';
import portfolioInfo from '../lib/portfolioInfo';

const AboutWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    .grid-item {
        p {
            color: ${palette.gray[3]};
            line-height: 1.5;
            font-size: 20px;
        }
    }
`;


const About = () => {
    return (
        <>
        <h3>{portfolioInfo.about.title}</h3>
        <AboutWrapper>
            <div className="grid-item">
                <p>{portfolioInfo.about.description}</p>
            </div>
            <div className="grid-item">
            </div>
        </AboutWrapper>
        </>
    );
};

export default About;