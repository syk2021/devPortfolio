import styled from 'styled-components';
import palette from '../lib/palette';
import portfolioInfo from '../lib/portfolioInfo';

const EducationWrapper = styled.div`
    :hover {
        hr {
            border: solid ${palette.purple[3]};
        }
    }
    hr {
        border: solid ${palette.gray[3]};
    }
    .school {
        line-height: 0.8px;
        h4 {
            font-size: 20px;
        }
        h5 {
            font-size: 18px;
        }
        p {
            font-size: 16px;
            color: ${palette.gray[4]};
        }
    }
    .description {
        p {
            display: flex;
            font-size: 17px;
            margin-top: 0;
            margin-bottom: 3px;
        }
        ul {
            margin-top: 0;
        }
        li {
            font-size: 17px;
        }
    }
`;

const Education = () => {
    return (
        <EducationWrapper>
            <h3>Education</h3>
            <div className="school">
                <h4>{portfolioInfo.education.school}</h4>
                <h5>{portfolioInfo.education.degree}</h5>
                <p>{portfolioInfo.education.date}</p>
            </div>
            <div className="description">
                <p>{portfolioInfo.education.description}</p>
                <p>Coursework includes: </p>
                <ul>
                    <li>{portfolioInfo.education.coursework[0]}</li>
                    <li>{portfolioInfo.education.coursework[1]}</li>
                </ul>
            </div>
            <hr/>
        </EducationWrapper>
    );
};

export default Education;