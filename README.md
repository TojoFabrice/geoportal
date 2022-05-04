<p align="center">
  <a href="http://egeo.geofit.fr">
    <img alt="eGeo Portal Template" src="./docs/logo-egeo.png" width="230" />
  </a>
</p>
<h1 align="center">
e-Geo Portal Template
</h1> 

## 🚀 Quick start

### Requirements

- VS Code (recommended) (https://code.visualstudio.com/download)
  - Extensions:
    - Git Graph [git-graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
    - GitLens — Git supercharged [gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
    - Prettier - Code formatter [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Git (https://git-scm.com/download)

```
git config --global user.name "Sam Smith"
git config --global user.email sam@example.com
```

- NodeJS & npm (https://nodejs.org/en/download/)

```
node -v
```

- Gatsby CLI

```
npm install -g gatsby-cli
```

### Getting Started

1.  **Clone the project.**

    Navigate into your new site’s directory.

    ```bash
    git clone https://git.geofit.fr/egeo/portal.git
    cd portal/
    ```

1.  **Edit environment variables.**

    Add .env file from template [.sample.env](.sample.env)

    ```
    PROJECT_PROTOCOL=http
    PROJECT_HOST=egeo.geofit.fr
    PROJECT_PORT=80
    PROJECT_URL=${PROJECT_PROTOCOL}://${PROJECT_HOST}:${PROJECT_PORT}

    HASURA_API_TOKEN=Admin4Hasura
    TYPESENSE_API_TOKEN=Key4Typesense
    ```

    Optional

    ```
    TYPESENSE_API_PATH=/search/
    ```

1.  **Start developing.**

    Install (or Update) all packages

    ```bash
    npm install
    ```

    Start it up (start local development server)

    ```bash
    gatsby develop
    ```

    or

    ```
    npm start
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `portal` directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## License

MIT
