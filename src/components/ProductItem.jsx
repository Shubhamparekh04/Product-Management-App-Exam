import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../features/products/productThunks';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteProduct(product.id));

  // const handleUpdate = () => {
  //   const updated = { ...product, title: product.title + ' (Updated)' };
  //   dispatch(updateProduct(updated));
  // };

  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5>{product.title}</h5>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <button className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
          {/* <button className="btn btn-warning" onClick={handleUpdate}>Update</button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
