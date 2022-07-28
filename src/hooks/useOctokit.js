// Octokit used to get GitHub REST API
import { useState, useEffect } from 'react';
import { Octokit } from 'octokit';

export default function useOctokit() {
    // repos will store array found in promise
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function onLoad() {
            const octokit = new Octokit({
                auth: process.env.REACT_APP_GITHUB_TOKEN            });

            await octokit.request('GET /users/{username}/repos', {
                username: `${process.env.REACT_APP_GITHUB_USERNAME}`
                // res => console.log(res.data)
            }).then(res => {
                console.log(res.data)
                setRepos(res.data)
                /* console.log("repos:")
            console.log(repos)*/})
            .catch(err => console.log(err));
        }

        onLoad();
    },[])

    return repos;
};