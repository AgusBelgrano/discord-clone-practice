import { useNavigate } from "react-router";
import "./ConfigBar.css";
import { useEffect, useState } from "react";
import { ActivitySettings, AppSettings, BillingSettings, MoreSettings, UserSettings } from "../../../constants/SettingsSections.constant";
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
      <nav>
        <h6>User settings</h6>
        <ul>
          {UserSettings.map((section) => (
            <li
              className={section === selectedOption ? "selected" : ""}
              key={section.id}
              onClick={() => navigate(section.route)}
            >
              {section.title}
            </li>
          ))}
        </ul>
        <hr />
        <h6>Billing settings</h6>
        <ul>
          {BillingSettings.map((section) => (
            <li
              className={section === selectedOption ? "selected" : ""}
              key={section.id}
              onClick={() => navigate(section.route)}
            >
              {section.title}
            </li>
          ))}
        </ul>
        <hr />
        <h6>App settings</h6>
        <ul>
          {AppSettings.map((section) => (
            <li
              className={section === selectedOption ? "selected" : ""}
              key={section.id}
              onClick={() => navigate(section.route)}
            >
              {section.title}
            </li>
          ))}
        </ul>
        <hr />
        <h6>Activity settings</h6>
        <ul>
          {ActivitySettings.map((section) => (
            <li
              className={section === selectedOption ? "selected" : ""}
              key={section.id}
              onClick={() => navigate(section.route)}
            >
              {section.title}
            </li>
          ))}
        </ul>
        <hr />
        <ul>
          {MoreSettings.map((section) => (
            <li
              className={section === selectedOption ? "selected" : ""}
              key={section.id}
              onClick={() => navigate(section.route)}
            >
              {section.title}
            </li>
          ))}
          <hr />
          <li onClick={logout}>Log Out</li>
        </ul>
      </nav>
    </div>
  );
};

export default ConfigBar;
