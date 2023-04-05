import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
