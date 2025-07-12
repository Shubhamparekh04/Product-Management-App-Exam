import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/productThunks";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(form));
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <input className="form-control mb-2" type="number" placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} required />
        <input className="form-control mb-2" placeholder="Category" onChange={(e) => setForm({ ...form, category: e.target.value })} required />
        <input className="form-control mb-2" placeholder="Image URL" onChange={(e) => setForm({ ...form, image: e.target.value })} required />
        <button className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
