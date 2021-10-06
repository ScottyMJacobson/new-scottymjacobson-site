import App from './App'
import { ThemeProvider } from './contexts/theme'

export default function Home() {
  return (
  <ThemeProvider>
    <App />
  </ThemeProvider>
  );
}
