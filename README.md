# Next.js i18n Sample App

This is a sample i18n project.

Changing language is possible with dropdown and method of native [Next.js](https://nextjs.org/) internationalization with dictionaries and middleware.

Technique used for routing in this sample is **sub-path**.

Because all layouts and pages in the `app/` directory default to [Server Components](https://nextjs.org/docs/getting-started/react-essentials#server-components), we do not need to worry about the size of the translation files affecting our client-side JavaScript bundle size. This code will **only run on the server**, and only the resulting HTML will be sent to the browser.

# Tech stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)

# Getting Started

First, install dependencies with command:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

# Learn More

To learn more about Next.js internationalization, take a look [here](https://nextjs.org/docs/app/building-your-application/routing/internationalization).
