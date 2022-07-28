import styled from 'styled-components';
import palette from '../lib/palette';
import portfolioInfo from '../lib/portfolioInfo';

const DateWrapper = styled.div`
    p {
        font-size: 15px;
        line-height: 1;
        b {
            color: ${palette.purple[7]};
        }
    }
`;

const News = () => {
    return (
        <DateWrapper>
            {portfolioInfo.news.news.map((notice) => {
            return (
                <p><b>{notice.date}</b>{notice.description}</p>
            )})}
        </DateWrapper>
    );
};

export default News;