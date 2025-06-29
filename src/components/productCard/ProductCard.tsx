import { Link } from 'react-router-dom';
import './ProductCard.scss';

interface Product {
  id: number | string;
  title: string;
  price: number;
  image: string;
};

type ProductCardProps = { product: Product };

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-card__image"
      />

      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__price">{product.price} $</p>

      <Link
        to={`/product/${product.id}`}
        className="product-card__link"
      >
        Details →
      </Link>
    </div>
  );
};

export default ProductCard;
