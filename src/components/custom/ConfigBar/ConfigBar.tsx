import { useNavigate } from "react-router";
import "./ConfigBar.css";
import { useEffect, useState } from "react";
import { SettingsSections } from "../../../constants/SettingsSections.constant";
import SettingsClose from "../../../assets/icons/SettingsClose";

const ConfigBar = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState<any>();


  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    
      <div className="sidebar">
        <h6>User settings</h6>
        <nav>
          <ul>
            {SettingsSections.map((section) => (
              <li
                className={section === selectedOption ? "selected" : ""}
                key={section.id}
                onClick={() => navigate(section.route)}
              >
                {section.title}
              </li>
            ))}
          </ul>
          {/* <ul>
            <li>My Account</li>
            <li>Profiles</li>
            <li>Privacy & Safety</li>
            <li>Authorized Apps</li>
            <li>Devices</li>
            <li>Connections</li>
            <li>Friend Requests</li>
          </ul> */}
          <hr />
          <h6>Billing settings</h6>
          <ul>
            <li>Nitro</li>
            <li>Server Boost</li>
            <li>Subscriptions</li>
            <li>Gift Inventory</li>
            <li>Billing</li>
          </ul>
          <hr />
          <h6>App settings</h6>
          <ul>
            <li>Appearance</li>
            <li>Accessibility</li>
            <li>Voice & Video</li>
            <li>Text & Images</li>
            <li>Notifications</li>
            <li>Keybinds</li>
            <li>Language</li>
            <li>Windows Settings</li>
            <li>Streamer Mode</li>
            <li>Advanced</li>
          </ul>
          <hr />
          <h6>Activity settings</h6>
          <ul>
            <li>Activity Privacy</li>
            <li>Registered Games</li>
            <li>Game Overlay</li>
          </ul>
          <hr />
          <ul>
            <li>What's New</li>
            <li>HypeSquad</li>
            <hr />
            <li onClick={logout}>Log Out</li>
          </ul>
        </nav>
      </div>
  );
};

export default ConfigBar;
