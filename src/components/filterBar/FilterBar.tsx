import "./FilterBar.scss";

type FilterBarProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}



const FilterBar: React.FC<FilterBarProps> = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="filter-bar">
      <button
        className={`filter-bar__button ${selectedCategory === 'all' ? 'filter-bar__button--active' : ''}`}
        onClick={() => onSelect('all')}
      >
        All
      </button>
      {categories.map((cat: string) => (
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