// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://familybankdocs.netlify.app',
	integrations: [
		starlight({
			title: 'Family Bank Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AviEisenman85/family-bank-docs' }],
			sidebar: [
				{ label: 'Getting Started Guide', slug: 'getting-started' },
				{ label: 'Dashboard Overview', slug: 'dashboard-overview' },
				{ label: 'Create Accounts', slug: 'create-accounts' },
				{ label: 'Manage Accounts', slug: 'manage-accounts' },
				{ label: 'Record a Transaction', slug: 'record-a-transaction' },
				{ label: 'Schedule a Transaction', slug: 'schedule-a-transaction' },
				{ label: 'Review App Activity', slug: 'review-app-activity' },
				{ label: 'Configure Settings', slug: 'configure-settings' },
			],
		}),
	],
});
