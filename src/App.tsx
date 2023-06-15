import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SettingsLayout from "./components/layout/SettingsLayout";
import {MyAccount, Profiles, PrivacySafety, AuthorizedApps, Devices, Connections, FriendRequests} from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="settings" element={<SettingsLayout />}>
          <Route index element={<MyAccount />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="privacy" element={<PrivacySafety />} />
          <Route path="authorizedApps" element={<AuthorizedApps />} />
          <Route path="devices" element={<Devices />} />
          <Route path="connections" element={<Connections />} />
          <Route path="friendRequests" element={<FriendRequests />} />
          <Route path="nitro" element={<FriendRequests />} />
          <Route path="serverBoost" element={<FriendRequests />} />
          <Route path="subscriptions" element={<FriendRequests />} />
          <Route path="giftInventory" element={<FriendRequests />} />
          <Route path="billing" element={<FriendRequests />} />
          <Route path="appearance" element={<FriendRequests />} />
          <Route path="accessibility" element={<FriendRequests />} />
          <Route path="voiceVideo" element={<FriendRequests />} />
          <Route path="textImages" element={<FriendRequests />} />
          <Route path="notifications" element={<FriendRequests />} />
          <Route path="keybinds" element={<FriendRequests />} />
          <Route path="language" element={<FriendRequests />} />
          <Route path="windowsSenttings" element={<FriendRequests />} />
          <Route path="streamerMode" element={<FriendRequests />} />
          <Route path="advanced" element={<FriendRequests />} />
          <Route path="activityPrivacy" element={<FriendRequests />} />
          <Route path="registeredGames" element={<FriendRequests />} />
          <Route path="gameOverlay" element={<FriendRequests />} />
        </Route>
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
