This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Timestamps and learning notes

-   `yarn create next-app .` create boilerplate in current project folder
-   `yarn run dev`

16:55 Add Moralis React package - https://www.npmjs.com/package/react-moralis

-   `yarn add moralis react-moralis` Make sure `react react-dom` installed first
-   Note that these are dependencies and not 'dev' dependencies as we need these packages to build our websites, not just for developer purposes

16:58 React Hooks

17:05 useEffect Hook

-   useEffect will run twice due to React Strict Mode
-   No dependency array - will run anytime something re-renders
-   CAREFUL with this! Can cause circular renders
-   blank dependency array - run once on load

17:10 Local Storage - making a more robust Connect button

17:18 isweb3EnableLoading

17:19 web3uikit

-   `yarn add web3uikit`
-   https://github.com/web3ui/web3uikit
-   NOTE - not a dev dependency as required in the website
-   "web3uikit": "^1.0.2" - had an error trying to locate the `<ConnectButton />` module?

-   NOTE - had to change the web3uikit version to `^0.1.159` and re-run `yarn install` to get this working?

17:22 Introduction to calling functions in NextJS

-   auto import of abi and contract addresses

17:38 runContractFunction

-   NOTE - in the header component, the information about the Metamask wallet is passed up to the Moralis Provider, which is then passed down to the LotteryEntrance component (and any other components inside the `<MoralisProvider />` tags)
-   this function can both send transactions and read state

17:45 useState

17:50 Calling functions in NextJS

17:52 useNotification

17:58 Reading & Displaying contract data
