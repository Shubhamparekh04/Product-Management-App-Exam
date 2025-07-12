import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductForm from "./components/ProductForm";

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = sessionStorage.getItem("auth") === "true";
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {isAuthenticated && !isLoginPage && <Navbar />}
      {children}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
