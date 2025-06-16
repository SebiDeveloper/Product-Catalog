// import { Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/home/Home';
// import Navbar from './components/navbar/Navbar';
// import ProductDetails from "./pages/productDetails/ProductDetails";
// import ProductCard from './components/productCard/ProductCard';
// import Cart from "./components/cart/Cart";
// import NotFound from "./pages/notFound/NotFound";

// import './App.scss';

// function App() {
//   return (
//     <div className='container'>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<ProductCard />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   )
// }

// export default App;


// typescript + react


import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ProductDetails from './pages/productDetails/ProductDetails';
import NotFound from './pages/notFound/NotFound';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';
import { CartProvider } from './context/cartContext/CartContext';

import './App.scss';

function App() {
  return (
    <CartProvider>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;