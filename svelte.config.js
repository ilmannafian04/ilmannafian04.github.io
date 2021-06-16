import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),
    vite: {
      server: {
        hmr: {
          host: 'localhost'
        }
      }
    },
    paths: {
      base: process.env.CI === 'true' ? '/ilmannafian04.github.io' : '',
      assets: process.env.CI === 'true' ? '/ilmannafian04.github.io' : '',
    },  
  },
};

export default config;
