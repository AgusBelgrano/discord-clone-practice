interface Settings {
    id: string;
    title: string;
    route: string;
}

export const SettingsSections: Settings[] = [
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