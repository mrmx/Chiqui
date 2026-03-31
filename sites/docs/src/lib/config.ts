import { initConfig } from 'chiky/config';
import rawConfig from '$config';

export const config = initConfig(rawConfig, { validate: true });

// Re-export chiky helpers (they read from the initialized config)
export {
	getConfig,
	siteName,
	siteLogo,
	defaultLang,
	supportedLangs,
	showHeader,
	showFooter,
	headerNavItems,
	footerNavItems,
	navItems,
	navAllLinks,
	findGroup,
	isGroup,
	isLink,
	showSection,
	cfg
} from 'chiky/config';
