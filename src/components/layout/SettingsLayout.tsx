import "./styles.css";
import { Outlet, useNavigate } from "react-router-dom";
import ConfigBar from "../custom/ConfigBar/ConfigBar";
import SettingsClose from "../../assets/icons/SettingsClose";

const SettingsLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-container d-flex">
      <ConfigBar />
      <Outlet />
      <div className="closeButton" onClick={() => navigate("/home")}>
        <div className="rounded">
          <SettingsClose />
        </div>
        <span>ESC</span>
      </div>
    </div>
  );
};

export default SettingsLayout;
