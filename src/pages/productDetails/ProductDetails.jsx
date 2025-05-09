import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cartContext/CartContext';
import './ProductDetails.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Error loading product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setMessage('The product has been added to the cart! ✅');
    setTimeout(() => setMessage(''), 2500);
  };

  if (loading) return <p className="product-details__loading">Please wait. Loading...</p>;
  if (!product) return <p className="product-details__error">Product not found.</p>;

  return (
    <div className="product-details">
      <button className="product-details__back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="product-details__title">{product.title}</h2>
      <img
        className="product-details__image"
        src={product.image}
        alt={product.title}
      />
      <p className="product-details__description">{product.description}</p>
      <p className="product-details__price"><strong>Price:</strong> {product.price} $</p>

      <button className="product-details__add-btn" onClick={handleAddToCart}>
      Add to cart
      </button>

      {message && (
        <p className="product-details__message">{message}</p>
      )}
    </div>
  );
};

export default ProductDetails;