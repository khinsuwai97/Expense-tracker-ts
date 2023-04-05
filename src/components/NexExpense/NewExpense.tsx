import ExpenseForm from './ExpenseForm';
import useModalForm from '../../hooks/useModalForm';
import './NewExpense.css';
const NexExpense = () => {
  const { showForm, openForm, closeForm } = useModalForm();

  return (
    <div className="new-expense">
      {!showForm && <button onClick={openForm}>Add Expenses</button>}
      {showForm && <ExpenseForm closeForm={closeForm} />}
    </div>
  );
};

export default NexExpense;
