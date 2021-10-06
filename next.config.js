module.exports = {
  reactStrictMode: true,
  // Force .page prefix on page files (ex. index.page.tsx) so .js dependency files can be included in /pages directory without Next.js throwing build errors
  pageExtensions: [
    // Used for pages:
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    // Used for routes:
    'route.tsx',
    'route.ts',
    'route.jsx',
    'route.js',
  ],
}
