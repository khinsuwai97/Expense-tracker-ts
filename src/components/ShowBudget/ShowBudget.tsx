import useExpenseContext from '../../context/useExpenseContext';
import useModalForm from '../../hooks/useModalForm';
import EditBudget from '../EditBudget/EditBudget';
import '../NexExpense/NewExpense.css';
import './ShowBudget.css';

const ShowBudget = () => {
  const { totalBudget, totalExpense, remainingAmount } = useExpenseContext();
  const { showForm, openForm, closeForm } = useModalForm();
  return (
    <>
      {showForm && <EditBudget closeForm={closeForm} budget={totalBudget} />}
      <div className="new-expense ">
        <div className="budget-box">
          <div className="show-budget-box show-budget-box1 ">
            Budget: ${totalBudget?.toFixed(2)}
            <span className="budget-edit" onClick={openForm}>
              Edit
            </span>
          </div>
        </div>
        <div className="show-budget  ">
          <div className="show-budget-box show-budget-box2 ">
            Remaining: ${remainingAmount.toFixed(2)}
          </div>
          <div className="show-budget-box show-budget-box3 ">
            Expenses: ${totalExpense.toFixed(2)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowBudget;
