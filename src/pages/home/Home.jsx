import { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import FilterBar from '../../components/filterBar/FilterBar';
import './Home.scss';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFiltered(
      category === 'all'
        ? products
        : products.filter((p) => p.category === category)
    );
  };

  return (
    <div className="home">
      <h1 className="home__title">Product Catalog</h1>
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={handleCategoryChange}
      />
      {loading ? (
        <p className="home__loading">Please wait. Loading...</p>
      ) : (
        <div className="home__grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;