import adapter from '@sveltejs/adapter-cloudflare';

const config = {
	kit: {
	  adapter: adapter(),
	  // ... truncated ...
	}
  };
  
  export default config;