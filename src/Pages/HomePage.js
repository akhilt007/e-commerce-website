import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/ProductCard';
import Footer from '../Components/Footer';
import Animi from '../Pages/Animi';


function HomePage() {
  const products = useSelector((state) => state.products.items);

  return (
    <>
      <Navbar />
      <div className='container text-center'>
        <h1 style={{ color: 'black ', fontFamily:'fantasy' }}>Welcome to the best offer store in the city</h1>
        <h4 style={{ color: 'red' }}> up to 50% flat off</h4>
        <Animi/>
      </div>

      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://reviewx.io/wp-content/uploads/2021/06/5-Best-WooCommerce-Product-Slider-Plugins-Elementor-Addons.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://wpwax.com/wp-content/uploads/2021/11/2.Why-Should-You-Use-a-WooCommerce-Product-Slider-in-Your-eCommerce-Website.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>



      {/* Products List */}
      <div className="container my-5">
        <div className="row justify-content-center">
          {products.map((product) => (
            <div className="col-md-4 d-flex align-items-stretch mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default HomePage;
