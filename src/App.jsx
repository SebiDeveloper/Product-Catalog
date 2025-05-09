import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductDetails from "./pages/productDetails/ProductDetails";
import ProductCard from './components/productCard/ProductCard';
import Cart from "./components/cart/Cart";
import NotFound from "./pages/notFound/NotFound";

import './App.scss';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductCard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App