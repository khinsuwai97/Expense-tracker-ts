import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import useExpenseContext from '../../context/useExpenseContext';

const ExpenseList = () => {
  const { expenses } = useExpenseContext();
  if (expenses.length === 0) {
    return <p className="expenses-list__fallback">No Expenses Found!</p>;
  }
  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
