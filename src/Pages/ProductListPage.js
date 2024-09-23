import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/ProductCard';
import Footer from '../Components/Footer';

function ProductListPage() {
  const { category } = useParams();  // Get category from the URL
  const products = useSelector((state) => state.products.items);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Category: {category}</h2>
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ProductListPage;
