# devPortfolio
**Overview**: a developer portfolio designed with React

## Main Components

:heavy_check_mark: **Navigation bar**: Used hash links to explore single-page navigation (NavHashLink from 'react-router-dom')

:heavy_check_mark: **Education**: Displays school, degree, major information.

:heavy_check_mark: **Open Source Projects**: Using GitHub's GraphQL API, displays both pinned repositories and more repositories (set to 12). 

:heavy_check_mark: **News**: A space for updates 

:heavy_check_mark: **Experience**: Grid cards available for use.

- Upon use, users will have to update *portfolioInfo.js* in src/lib. Most, if not all, of the information that needs to be tweaked is in this file.

## Technologies Used

:heavy_check_mark: **GraphQL API**
- A note on GitHub's GraphQL API: While GitHub does offer [REST API](https://docs.github.com/en/rest), some features are inaccessible, such as 1) fetching pinned repositories or 2) getting the color code of the primary language used in the repository. An alternative to the REST API is [GraphQL API](https://docs.github.com/en/graphql). GitHub offers a [GraphQL explorer](https://docs.github.com/en/graphql/overview/explorer), which can help users form queries by checking boxes that appear on the side.
- If users wish to use the REST API, they can do so through Octokit (or Axios). There is a hook in this project called *useOctokit.js* that gives an example of how to use Octokit.

:heavy_check_mark: **apollo-client**

:heavy_check_mark: **React**

:heavy_check_mark: **Material-UI**

## Development in Progress (as of July 28)

- **GitHub API & npm run deploy:** This portfolio was initially designed for GitHub Pages deployment, but the backend server for querying the API safely is still in development.
- **Pagination**
