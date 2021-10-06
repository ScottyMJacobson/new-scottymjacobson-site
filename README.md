My public website! A Next.js fork/port of Raj Shekhar's [Cleanfolio](https://github.com/rajshekhar26/cleanfolio), combined into the create-next-app boilerplate.

## To Run

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding New Pages

To add a new page, give it the extension `.page.js`, rather than just `.js`.

_(This is because by default Next.js assumes all .js files in `pages/` should be a page. In order to avoid this, and still let us co-locate "lib" and other dependencies, we say "only pay attention to this special extension" through Next.js config's `pageExtensions` feature. See discussion [here](https://github.com/vercel/next.js/issues/3728))_
