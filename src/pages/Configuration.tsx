import { useNavigate } from "react-router";
import Button from "../components/common/Button/Button";
import ConfigBar from "../components/custom/ConfigBar/ConfigBar";

const Configuration = () => {
  const navigate = useNavigate();

  return <ConfigBar />;
};

export default Configuration;
