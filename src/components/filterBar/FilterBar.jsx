import "./FilterBar.scss";

const FilterBar = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="filter-bar">
      <button
        className={`filter-bar__button ${selectedCategory === 'all' ? 'filter-bar__button--active' : ''}`}
        onClick={() => onSelect('all')}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-bar__button ${selectedCategory === cat ? 'filter-bar__button--active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;