import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { group } from './config/sidebar';

/**
 * Starlight sidebar configuration object for the global site sidebar.
 *
 * - Top-level groups become tabs.
 * - Use the `group()` utility function to define groups. This uses labels from our
 *   `src/content/nav/*.ts` files instead of defining labels and translations inline.
 *
 */
export const sidebar = [
	// Start tab
	group('start', {
		items: [
			'getting-started',
			group('start.welcome', {
				items: [
					'concepts/why-astro',
					'concepts/islands',
					'tutorial/0-introduction',
					'astro-courses',
				],
			}),
			group('start.newProject', {
				items: ['install-and-setup', 'basics/project-structure', 'develop-and-build'],
			}),
			group('start.config', {
				items: [
					'guides/configuring-astro',
					'editor-setup',
					'guides/typescript',
					'guides/environment-variables',
					'guides/build-with-ai',
					'guides/dev-toolbar',
				],
			}),
			group('start.migrate', {
				collapsed: true,
				autogenerate: { directory: 'guides/migrate-to-astro' },
			}),
		],
	}),

	// Guides tab
	group('guides', {
		items: [
			group('guides.routing', {
				items: [
					'basics/astro-pages',
					'guides/routing',
					'guides/endpoints',
					'guides/middleware',
					'guides/internationalization',
					'guides/prefetch',
					'guides/view-transitions',
				],
			}),
			group('guides.ui', {
				items: [
					'basics/astro-components',
					'basics/layouts',
					'guides/styling',
					'guides/fonts',
					'guides/syntax-highlighting',
					'guides/client-side-scripts',
					'guides/framework-components',
				],
			}),
			group('guides.content', {
				items: [
					'guides/markdown-content',
					'guides/content-collections',
					'guides/images',
					'guides/data-fetching',
					'guides/astro-db',
				],
			}),
			group('guides.serverRendering', {
				items: [
					'guides/on-demand-rendering',
					'guides/server-islands',
					'guides/actions',
					'guides/sessions',
				],
			}),
			group('guides.upgrade', {
				items: [
					'upgrade-astro',
					group('guides.upgrade.major', {
						collapsed: true,
						items: [
							'guides/upgrade-to/v5',
							'guides/upgrade-to/v4',
							'guides/upgrade-to/v3',
							'guides/upgrade-to/v2',
							'guides/upgrade-to/v1',
						],
					}),
				],
			}),
			'guides/troubleshooting',
			group('guides.recipes', { collapsed: true, autogenerate: { directory: 'recipes' } }),
			'contribute',
		],
	}),
] satisfies StarlightUserConfig['sidebar'];
