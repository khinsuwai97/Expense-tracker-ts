import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import SoryBy from './SoryBy';
import './Expenses.css';
import useExpenseContext from '../../context/useExpenseContext';

const Expenses = () => {
  const { totalExpense } = useExpenseContext();

  return (
    <Card className="expenses">
      <p className="expense-history">Expenses History</p>
      <SoryBy />
      <ExpenseList />
      <div className="expense-total-container">
        <h2 className="expense-total">Total:</h2>
        <p className="expense-total-amount">$ {totalExpense.toFixed(2)}</p>
      </div>
    </Card>
  );
};

export default Expenses;
