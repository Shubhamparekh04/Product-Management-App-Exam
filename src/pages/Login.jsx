import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const { username, password } = form;

    if (!username || !password) {
      setError("⚠️ Username and password are required");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:5000/users?username=${username}&password=${password}`
      );

      if (res.data.length > 0) {
        sessionStorage.setItem("auth", "true");
        sessionStorage.setItem("username", res.data[0].username);
        navigate("/");
      } else {
        setError("❌ Invalid username or password");
      }
    } catch {
      setError("❌ Server error");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="mb-3 text-center">🔐 Login</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <input
          className="form-control mb-2"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
