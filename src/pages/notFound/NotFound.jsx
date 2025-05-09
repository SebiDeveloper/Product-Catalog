import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 - Pagina nu a fost găsită</h1>
      <p className="not-found__text">Ups! Pagina pe care o cauți nu există.</p>
      <Link to="/" className="not-found__link">
        ← Înapoi la Acasă
      </Link>
    </div>
  );
};

export default NotFound;