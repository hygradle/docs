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
	group('start', {
		items: [
			'overview',
			group('start.quickstart', {
				items: [
					'quickstart/project-setup',
					'quickstart/plugin-configuration',
					'quickstart/run-configuration',
				],
			}),
		],
	}),
	// group('recipes', {
	// 	autogenerate: {
	// 		directory: 'recipes',
	// 	},
	// }),
] satisfies StarlightUserConfig['sidebar'];
