// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'NexusTek Winners Circle Breakfast Series',
			social: [{ icon: 'youtube', label: 'Podcast', href: 'https://www.brighttalk.com/channel/20887' }],

		}),
	],
});
