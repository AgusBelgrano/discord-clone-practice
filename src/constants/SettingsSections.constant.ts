import MyAccount from "../components/custom/ConfigBar/Settings/MyAccount/MyAccount";
import Profiles from "../components/custom/ConfigBar/Settings/Profiles/Profiles";
import PrivacySafety from "../components/custom/ConfigBar/Settings/PrivacySafety/PrivacySafety";
import AuthorizedApps from "../components/custom/ConfigBar/Settings/AuthorizedApps/AuthorizedApps";
import Devices from "../components/custom/ConfigBar/Settings/Devices/Devices";
import Connections from "../components/custom/ConfigBar/Settings/Connections/Connections";
import FriendRequests from "../components/custom/ConfigBar/Settings/FriendRequests/FriendRequests";

export const SettingsSections = [ 
    {
        id: 'myAccount',
        title: 'My Account',
        component: MyAccount
    },
    {
        id: 'profile',
        title: 'Profiles',
        component: Profiles
    },
    {
        id: 'privacySafety',
        title: 'Privacy & Safety',
        component: PrivacySafety
    },
    {
        id: 'authorizedApps',
        title: 'Authorized Apps',
        component: AuthorizedApps
    },
    {
        id: "devices",
        title: "Devices",
        component: Devices
    },
    {
        id: "connections",
        title: "Connections",
        component: Connections
    },
    {
        id: "friendRequests",
        title: "Friend Requests",
        component: FriendRequests
    }
];