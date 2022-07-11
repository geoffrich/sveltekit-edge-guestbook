import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import dotenv from 'dotenv';

// this is here so it only runs in dev
// we need process.env available for the Upstash environment variables
// and we can't use VITE_ variables since we don't want to expose the
// connection string client side
dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({ edge: true })
	}
};

export default config;
