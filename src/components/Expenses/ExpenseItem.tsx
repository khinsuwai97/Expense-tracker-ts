import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { ExpensesData } from '../../types/types';
import useExpenseContext from '../../context/useExpenseContext';
useExpenseContext;
import EditExpense from '../EditExpense/EditExpense';
import './ExpenseItem.css';

const ExpenseItem = (props: ExpensesData) => {
  const { getEditItem, removeExpense, showEditForm } = useExpenseContext();

  return (
    <>
      {showEditForm && <EditExpense expense={props} />}
      <li>
        <Card className="expense-item">
          <div className="expense-detail">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
              <h2>{props.title}</h2>
              <p className="expense-item__price">$ {props.amount}</p>
            </div>
          </div>
          <div className="expense-item-btn">
            <button onClick={() => getEditItem(props.id)}>Edit</button>
            <button onClick={() => removeExpense(props.id)}>Delete</button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default ExpenseItem;
