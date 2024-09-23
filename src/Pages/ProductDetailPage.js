// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { addToCart } from '../features/Cart/CartSlice';
// import Navbar from '../Components/Navbar';

// function ProductDetailPage() {
//   const { id } = useParams();
//   const products = useSelector((state) => state.products.items);
//   const product = products.find((item) => item.id.toString() === id);
//   const dispatch = useDispatch();

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="img-fluid"
//             />
//           </div>
//           <div className="col-md-6">
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//             <h4>${product.price}</h4>
//             <button className="btn btn-primary" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductDetailPage;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../features/Cart/CartSlice';
import Navbar from '../Components/Navbar';
import './ProductDetailPage.css'; // Optional: For additional custom styles
import Footer from '../Components/Footer';



function ProductDetailPage() {
  const { id } = useParams();
  const products = useSelector((state) => state.products.items);
  const product = products.find((item) => item.id.toString() === id);
  const dispatch = useDispatch();
 

  if (!product) {
    return <div className="text-center mt-5">Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
};

  

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          {/* Image Section */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid product-image"
            />
          </div>

          {/* Product Details Section */}
          <div className="col-md-6">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <h4 className="product-price">${product.price}</h4>

            <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ProductDetailPage;
