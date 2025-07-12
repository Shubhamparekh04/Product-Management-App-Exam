import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/users?username=${form.username}&password=${form.password}`
      );

      if (res.data.length > 0) {
        sessionStorage.setItem("auth", "true");
        sessionStorage.setItem("username", res.data[0].username);
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Error logging in");
    }
  };

  return (
    <div className="container mt-5 w-25 mx-auto">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        className="form-control mb-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
