import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

const Home = () => {
  const username = sessionStorage.getItem("username");

  return (
    <div className="container mt-4">
      <div className="bg-light p-4 rounded-3 mb-4 shadow-sm">
        <h2 className="mb-0">Welcome, {username || "User"} 👋</h2>
        <p className="text-muted mb-0">
          Manage your product inventory with ease.
        </p>
        <Link to="/add" className="btn btn-success rounded-pill">
          + Add Product
        </Link>
      </div>
      <ProductList />
    </div>
  );
};

export default Home;
