import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useEffect, useState } from 'react';

// using GitHub GraphQL API
export default function useApolloPinned() {
    const [pinnedRepos, setPinnedRepos] = useState([]);

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
                        pinnedItems(first: 6, types: REPOSITORY) {
                            edges {
                                node {
                                    ... on Repository {
                                        id
                                        name
                                        description
                                        primaryLanguage {
                                            name
                                            color
                                        }
                                        url
                                    }
                                }
                            }
                        }
                    }
                }`
            }).then(res => {
                console.log(res.data.user.pinnedItems.edges);
                setPinnedRepos(res.data.user.pinnedItems.edges);
        });
        }

        onLoad();
    }, [])

    return pinnedRepos;
}