import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/productActions";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(form));
    navigate("/");
  };

  return (
    <div className="container mt-4 w-25 mx-auto">
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Price"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Category"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Image URL"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <button className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
};
export default ProductForm;
