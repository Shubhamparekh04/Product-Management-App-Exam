import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

const Home = () => {
  const username = sessionStorage.getItem("username");

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Welcome, {username || "User"} 👋</h2>
          <p className="text-muted">Manage your product inventory here.</p>
        </div>
        <Link to="/add" className="btn btn-primary">+ Add Product</Link>
      </div>
      <ProductList />
    </div>
  );
};

export default Home;
