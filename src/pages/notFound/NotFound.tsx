import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 - Page not found</h1>
      <p className="not-found__text">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="not-found__link">
        ← Back to Home
      </Link>
    </div>
  );
};

export default NotFound;