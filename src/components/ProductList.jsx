import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container mt-3">
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        className="form-control w-25  mb-3"
      />
      <div className="row">
        {products
          .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
