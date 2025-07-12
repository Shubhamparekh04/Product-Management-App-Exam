import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../features/products/productThunks";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteProduct(product.id));

  // const handleUpdate = () => {
  //   const updated = { ...product, title: product.title + " (Updated)" };
  //   dispatch(updateProduct(updated));
  // };

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100 border-0 rounded-4">
        <img
          src={product.image}
          className="card-img-top rounded-top-4"
          alt={product.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title text-primary">{product.title}</h5>
          <p className="mb-1"><strong>💰 Price:</strong> ${product.price}</p>
          <p className="text-muted"><strong>📦 Category:</strong> {product.category}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>
              🗑 Delete
            </button>
            {/* <button className="btn btn-sm btn-outline-warning" onClick={handleUpdate}>
              ✏️ Update
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
