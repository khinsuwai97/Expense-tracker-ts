import './SortBy.css';
import useExpenseContext from '../../context/useExpenseContext';

const SoryBy = () => {
  const { handleSort, sortValue } = useExpenseContext();
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Sort by Amount</label>
        <select value={sortValue} onChange={(e) => handleSort(e.target.value)}>
          <option value="featured">Featured</option>
          <option value="asc">Ascending</option>
          <option value="des">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default SoryBy;
