import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productThunks";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const sortedItems = [...items].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      <div className="d-flex justify-content-end mb-4">
        <select
          className="form-select w-auto border-primary"
          style={{ minWidth: "180px" }}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="row">
        {sortedItems.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
