import App from './App'
import { ThemeProvider } from './contexts/theme'
import Head from 'next/head'

export default function Home() {
  return (
  <ThemeProvider>
    <Head>
        <title>Scotty Jacobson - Full Stack Engineer</title>
        <meta property="og:title" content="Scotty Jacobson - Full Stack Engineer" key="title" />
      </Head>
    <App />
  </ThemeProvider>
  );
}
