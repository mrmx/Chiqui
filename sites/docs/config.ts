import type { AppConfig } from 'chiky';

const extTarget = '_blank';

const config: AppConfig = {
	site: {
		name: 'Chiky',
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
						href: 'https://github.com/mrmx/chiky',
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
						href: 'https://github.com/mrmx/chiky',
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
								href: 'https://github.com/mrmx/chiky',
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
								href: 'https://github.com/mrmx/chiky',
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
