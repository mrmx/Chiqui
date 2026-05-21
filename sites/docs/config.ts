import type { AppConfig } from '@mrmx/chiqui';

const extTarget = '_blank';

const config: AppConfig = {
	site: {
		name: 'Chiqui',
		logoUrl: '/img/logo.svg'
	},
	i18n: {
		defaultLang: 'en',
		supported: ['en', 'es']
	},
	nav: {
		header: {
			show: true,
			items: {
				en: [
					{ name: 'Docs', href: '/en/docs' },
					{ name: 'About', href: '/en/about' },
					{
						name: '',
						title: 'GitHub',
						icon: 'streamline-logos:github-logo-2',
						href: 'https://github.com/mrmx/Chiqui',
						target: extTarget
					}
				],
				es: [
					{ name: 'Docs', href: '/es/docs' },
					{ name: 'Acerca de', href: '/es/acerca' },
					{
						name: '',
						title: 'GitHub',
						icon: 'streamline-logos:github-logo-2',
						href: 'https://github.com/mrmx/Chiqui',
						target: extTarget
					}
				]
			}
		},
		footer: {
			show: true,
			items: {
				en: [
					{
						name: 'Social',
						items: [
							{
								name: 'GitHub',
								href: 'https://github.com/mrmx/Chiqui',
								target: extTarget
							}
						]
					}
				],
				es: [
					{
						name: 'Social',
						items: [
							{
								name: 'GitHub',
								href: 'https://github.com/mrmx/Chiqui',
								target: extTarget
							}
						]
					}
				]
			}
		}
	}
};

export default config;
