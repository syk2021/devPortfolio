import styled from 'styled-components';
import palette from '../lib/palette';
// devicon: https://devicon.dev/
import './WhatIDo.css';
import portfolioInfo from '../lib/portfolioInfo';

const WhatIDoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    .grid-item {
        .dev-icons {
            margin-top: 0px;
            margin-bottom: 0px;
            padding-left: 0;
            padding-right: 0;
            font-size: 75px;
            
        }
        .remarks {
            color: ${palette.gray[3]};
            line-height: 1.5;
            font-size: 20px;
        }
        .icon-list-item {
            color: ${palette.gray[3]};
            i {
                color: ${palette.gray[3]};
            }
            :hover {
                i {
                    color: ${palette.purple[4]};
                }
                color: ${palette.purple[4]};
            }
            display: inline-block;
            list-style: none;
            margin-left: 3px;
            margin-right: 3px;
            p {
                font-size: 12px;
                text-align: center;
            }
        }
    }
`;

const WhatIDo = () => {
    return (
        <WhatIDoWrapper>
            <div className="grid-item">
                <ul className="dev-icons">
                    {portfolioInfo.skills.icons.map((icon) => {
                        return (
                            <li className="icon-list-item">
                                <i className={icon.className}></i>
                                <p><b>{icon.toolName}</b></p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="grid-item">
            <p className="remarks">I enjoy exploring new tools and building software (creative, or my versions of existing ones!). </p>
            </div>
        </WhatIDoWrapper>
    );
};

export default WhatIDo;