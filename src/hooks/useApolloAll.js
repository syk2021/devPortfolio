import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useEffect, useState } from 'react';

// using GitHub GraphQL API
export default function useApolloAll() {
    const [allRepos, setAllRepos] = useState([]);

    useEffect(() => {
        async function onLoad() {
            const httpLink = createHttpLink({
                uri: 'https://api.github.com/graphql',
            });

            const authLink = setContext((_, { headers }) => {
                return {
                    headers: {
                        ...headers,
                        authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                    }
                }
            });

            const client = new ApolloClient({
                link: authLink.concat(httpLink),
                cache: new InMemoryCache()
            });

            await client.query({
                query: gql`
                {
                    user(login: "${process.env.REACT_APP_GITHUB_USERNAME}") {
                        repositories(
                            orderBy: {field: CREATED_AT, direction: DESC}
                            first: 12
                            privacy: PUBLIC
                        ) {
                            edges {
                                node {
                                    id
                                    name
                                    description
                                    primaryLanguage {
                                        color
                                        name
                                    }
                                    url
                                }
                            }
                        }
                    }
                }`
            }).then(res => {
                console.log(res.data.user.repositories.edges);
                setAllRepos(res.data.user.repositories.edges);
        });
        }

        onLoad();
    }, [])

    return allRepos;
}