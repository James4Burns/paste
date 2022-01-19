# Next.js Starter

## File Structure

```
|-- /components        - place React components here
|   |-- button.tsx     - button component
|   |-- checkbox.tsx   - checkbox component
|   |-- input.tsx      - text input component
|   |-- layout.tsx     - main layout component
|   |-- mode.tsx       - dark/light mode toggle component
|   |-- select.tsx     - select (dropdown) component
|   |-- textarea.tsx   - text area component
|-- /hooks             - place React hooks here
|   |-- useMode.ts     - dark/light mode toggle hook
|-- /library           - place most TypeScript code here
|   |-- mode.ts        - dark/light mode functions
|   |-- settings.ts    - settings functions
|   |-- theme.ts       - theme functions
|-- /pages             - place Next.js pages here
|   |-- /api           - place Next.js API routes here
|   |-- _app.tsx       - custom Next.js App
|   |-- index.tsx      - Next.js home route
|-- /public            - place assets and images here
|-- /styles            - place custom CSS here
|   |-- globals.css    - global custom CSS
|-- /types             - place TypeScript type definitions here
|   |-- component.ts   - React component type definitions
|   |-- mode.ts        - dark/light mode type definitions
|   |-- setings.ts     - settings type definitions
|   |-- theme.ts       - theme type definitions
|-- /utilities         - place utility functions here
|-- .eslintrc.json     - linter configuration
|-- .gitignore         - version control ignore ifle
|-- .prettierignore    - formatter ignore file (.gitignore+)
|-- .prettierrc.json   - formatter configuration file
|-- next-env.d.ts      - Next.js type definitions
|-- next.config.js     - Next.js configuration file
|-- package.json       - package manager and script runner configuration file
|-- postcss.config.js  - CSS transformer configuration file
|-- README.md          - this file
|-- tailwind.config.js - CSS library configuration file
|-- tsconfig.json      - TypeScript configuration file
|-- yarn.lock          - package manager lock file
```
