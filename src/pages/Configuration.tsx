import { useNavigate } from "react-router";
import Button from "../components/common/Button/Button";

const Configuration = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    return <div>
        <Button value="Cerrar sesión" onClick={() => logout()} />
    </div>
}

export default Configuration;