import BudgetForm from './BudgetForm';
import '../NexExpense/NewExpense.css';
import useModalForm from '../../hooks/useModalForm';
const OwnBudget = () => {
  const { showForm, openForm, closeForm } = useModalForm();

  return (
    <div className="new-expense">
      {!showForm && <button onClick={openForm}>Add Own Budget</button>}
      {showForm && <BudgetForm closeForm={closeForm} />}
    </div>
  );
};

export default OwnBudget;
