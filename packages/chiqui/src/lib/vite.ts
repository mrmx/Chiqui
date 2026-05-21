/**
 * Vite config helper for chiqui sites.
 *
 * Usage in your site's vite.config.ts:
 * ```ts
 * import { chiquiViteConfig } from '@mrmx/chiqui/vite';
 * export default chiquiViteConfig();
 * ```
 */
import type { UserConfig as ViteUserConfig } from 'vite';

type UserConfig = ViteUserConfig & { test?: Record<string, unknown> };

export interface ChiquiViteOptions {
	/** Extra Vite config to merge */
	vite?: UserConfig;
	/** Coverage thresholds (defaults: 80/70/80/80) */
	coverage?: {
		statements?: number;
		branches?: number;
		functions?: number;
		lines?: number;
	};
}

export function chiquiViteConfig(options: ChiquiViteOptions = {}): UserConfig {
	const { coverage: cov } = options;
	return {
		server: {
			fs: {
				allow: ['content', 'config.ts']
			}
		},
		test: {
			include: ['tests/**/*.ts'],
			coverage: {
				provider: 'v8',
				all: true,
				include: ['src/**/*.{ts,tsx}'],
				exclude: ['src/**/*.d.ts', 'src/**/types.ts', 'src/lib/components/**', 'src/routes/**'],
				reportsDirectory: 'coverage',
				reporter: ['text', 'text-summary', 'html', 'lcov'],
				thresholds: {
					statements: cov?.statements ?? 80,
					branches: cov?.branches ?? 70,
					functions: cov?.functions ?? 80,
					lines: cov?.lines ?? 80
				}
			}
		},
		...options.vite
	};
}
