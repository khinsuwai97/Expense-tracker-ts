import React, { FormEvent, useState } from 'react';
import useExpenseContext from '../../context/useExpenseContext';
import '../NexExpense/ExpenseForm.css';

type FormProps = {
  closeForm: () => void;
};

const BudgetForm: React.FC<FormProps> = ({ closeForm }) => {
  const [budget, setBudget] = useState<number | null>(null);
  const { getBudget } = useExpenseContext();

  const formIsNotValid = budget === null;

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    getBudget(budget!);
    setBudget(null);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Own Budget</label>
          <input
            type="number"
            inputMode="numeric"
            min="0.01"
            step="0.01"
            value={budget || ''}
            onChange={(e) => setBudget(+e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={closeForm}>
          Cancel
        </button>
        <button disabled={formIsNotValid} type="submit">
          Add Budget
        </button>
      </div>
    </form>
  );
};

export default BudgetForm;
