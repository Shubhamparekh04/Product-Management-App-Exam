import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions/productActions';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={product.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5>{product.title}</h5>
          <p>${product.price}</p>
          <p>{product.category}</p>
          <button className="btn btn-danger" onClick={() => dispatch(deleteProduct(product.id))}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
