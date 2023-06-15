interface Settings {
    id: string;
    title: string;
    route: string;
}

export const UserSettings: Settings[] = [
    {
        id: 'myAccount',
        title: 'My Account',
        route: ''
    },
    {
        id: 'profile',
        title: 'Profiles',
        route: 'profiles'
    },
    {
        id: 'privacySafety',
        title: 'Privacy & Safety',
        route: 'privacy'
    },
    {
        id: 'authorizedApps',
        title: 'Authorized Apps',
        route: 'authorizedApps'
    },
    {
        id: 'devices',
        title: 'Devices',
        route: 'devices'
    },
    {
        id: 'connections',
        title: 'Connections',
        route: 'connections'
    },
    {
        id: 'friendRequests',
        title: 'Friend Requests',
        route: 'friendRequests'
    }
];

export const BillingSettings: Settings[] = [
    {
        id: 'nitro',
        title: 'Nitro',
        route: 'nitro'
    },
    {
        id: 'serverBoost',
        title: 'Server Boost',
        route: 'serverBoost'
    },
    {
        id: 'subscriptions',
        title: 'Subscriptions',
        route: 'subscriptions'
    },
    {
        id: 'giftInventory',
        title: 'Gift Inventory',
        route: 'giftInventory'
    },
    {
        id: 'billing',
        title: 'Billing',
        route: 'billing'
    },
]

export const AppSettings: Settings[] = [
    {
        id: 'appearance',
        title: 'Appearance',
        route: 'appearance'
    },
    {
        id: 'accessibility',
        title: 'Accessibility',
        route: 'accessibility'
    },
    {
        id: 'voiceVideo',
        title: 'Voice & Video',
        route: 'voiceVideo'
    },
    {
        id: 'textImages',
        title: 'Text & Images',
        route: 'textImages'
    },
    {
        id: 'notifications',
        title: 'Notifications',
        route: 'notifications'
    },
    {
        id: 'keybinds',
        title: 'Keybinds',
        route: 'keybinds'
    },
    {
        id: 'language',
        title: 'Language',
        route: 'language'
    },
    {
        id: 'windowsSettings',
        title: 'Windows Settings',
        route: 'windowsSenttings'
    },
    {
        id: 'streamerMode',
        title: 'Streamer Mode',
        route: 'streamerMode'
    },
    {
        id: 'advanced',
        title: 'Advanced',
        route: 'advanced'
    },
]

export const ActivitySettings: Settings[] = [
    {
        id: 'activityPrivacy',
        title: 'Activity Privacy',
        route: 'activityPrivacy'
    },
    {
        id: 'registeredGames',
        title: 'Registered Games',
        route: 'registeredGames'
    },
    {
        id: 'gameOverlay',
        title: 'Game Overlay',
        route: 'gameOverlay'
    },
]

export const MoreSettings: Settings[] = [
    {
        id: 'whatsNew',
        title: "What's New",
        route: "whatsNew"
    },
    {
        id: 'hypesquad',
        title: "HypeSquad",
        route: "hypesquad"
    },
]