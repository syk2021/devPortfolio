import { useState } from 'react';
import styled from 'styled-components';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Button } from '@material-ui/core';
import palette from '../../lib/palette';
import OpenSourceProjects from '../../components/OpenSourceProjects';
// import useOctokit from '../../hooks/useOctokit';
import useApolloPinned from '../../hooks/useApolloPinned';
import useApolloAll from '../../hooks/useApolloAll';
import portfolioInfo from '../../lib/portfolioInfo';

const HeaderContainer = styled.div`
    h3 {
        display: inline-block;
        vertical-align: top;
    }
    .toggle-buttons {
        margin-top: 1.2rem;
        display: inline-block;
        float: right;
    }
`;

const ButtonWrapper = styled.div`
    margin-top: 1em;
    text-align: center;
    .button {
        :hover {
            background-color: ${palette.purple[1]};
        }
    }
`;

const OpenSourceProjectsContainer = () => {
    // for those interested in using GitHub's REST API, use useOctokit()
    // const repos = useOctokit();

    // to use language colors, this project relies on GitHub's GraphQL API
    const allRepos = useApolloAll();
    const pinnedRepos = useApolloPinned();

    const [repoview, setRepoview] = useState();
    
    const handleRepoview = (e, newRepoview) => {
        setRepoview(newRepoview);
    }
    
    const githubLink = portfolioInfo.opensourceprojects.githubLink;

    return (
        <>
        <HeaderContainer>
            <h3>Open Source Projects</h3>
            <ToggleButtonGroup
            className='toggle-buttons'
            color='primary'
            onChange={handleRepoview}
            value={repoview}
            exclusive>
                <ToggleButton value="pinned">Pinned</ToggleButton>
                <ToggleButton value="all">All</ToggleButton>
            </ToggleButtonGroup>
        </HeaderContainer>
        <OpenSourceProjects repoview={repoview} allRepos={allRepos} pinnedRepos={pinnedRepos}/>
        <ButtonWrapper>
            <Button href={githubLink}
            className="button">More Projects at GitHub</Button>
        </ButtonWrapper>
        </>
    )
}

export default OpenSourceProjectsContainer;