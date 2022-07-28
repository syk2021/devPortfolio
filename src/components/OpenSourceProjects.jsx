
import { Grid, Box } from '@mui/material';
import styled from 'styled-components';
import palette from '../lib/palette';

const MyBox = styled(Box)`
    border: 1px solid ${palette.gray[0]};
    box-shadow: 0 0 11px rgba(33, 33, 33, .1);
    border-radius: 5px;
    :hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, .2);
        background-color: ${palette.purple[0]};
    }
    height: 120px;
    .repo-box {
        text-decoration: none;
    }
    .repo-container {
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        color: ${palette.gray[5]};
    }
    .name {
        font-size: 20px;
        color: black;
    }
    .description {
        margin-top: 8px;
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        line-height: 1.2em;
        height: 2.4em;
    }
    .language {
        .circle {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #00d3d3;
            display: inline-block;
        }
        .name {
            font-size: 12px;
            margin-left: 8px;
            display: inline-block;
        }
        margin-top: 0.3em;
    }
`;

const OpenSourceProjects = ({ repoview, allRepos, pinnedRepos }) => {
    // to check if our component view is switching properly
    console.log(repoview);
    
    // inline if-else
    return (
        repoview === 'pinned' 
        ? 
        <>
            <Grid container spacing={2}>
                {pinnedRepos.map((pinnedRepo) => {
                    const circleColor = pinnedRepo.node.primaryLanguage.color;
                    console.log(circleColor);
                    return (
                        <Grid item xs={6}>
                            <MyBox>
                                <a href={pinnedRepo.node.url} className="repo-box" key={pinnedRepo.node.id}>
                                    <div className="repo-container">
                                        <div className="name">{pinnedRepo.node.name}</div>
                                        <div className="description">{pinnedRepo.node.description}</div>
                                        <div className="language">
                                            <div className="circle" style={{ background: circleColor}}></div>
                                            <div className="name">{pinnedRepo.node.primaryLanguage.name}</div>
                                        </div>
                                    </div>
                                </a>
                            </MyBox>
                        </Grid>
                    )
                })}
            </Grid>
        </>
        : 
        <Grid container spacing={2}>
            {allRepos.map((repo) => {
                const circleColor = ((repo.node.primaryLanguage) != null) ? repo.node.primaryLanguage.color : null;
                return (
                    <Grid item xs={6}>
                        <MyBox>
                            <a href={repo.node.url} className="repo-box" key={repo.node.id}>
                                <div className="repo-container">
                                    <div className="name">{repo.node.name}</div>
                                    <div className="description">{repo.node.description}</div>
                                    {repo.node.primaryLanguage && (
                                        <div className="language">
                                            <div className="circle" style={{ background: circleColor }}></div>
                                            <div className="name">{repo.node.primaryLanguage.name}</div>
                                        </div>)}
                                </div>
                            </a>
                        </MyBox>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default OpenSourceProjects;