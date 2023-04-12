import React, { FormEvent, useState } from 'react';
import Modal from '../UI/Modal';
import './EditBudget.css';
import useExpenseContext from '../../context/useExpenseContext';

type FormProps = {
  closeForm: () => void;
  budget: number;
};

const EditBudget: React.FC<FormProps> = ({ closeForm, budget }) => {
  const [editBudget, setEditBudget] = useState(budget);
  const { getBudget } = useExpenseContext();

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    getBudget(editBudget);
    closeForm();
  };

  return (
    <Modal>
      <form onSubmit={onFormSubmit}>
        <div className="edit-budget__controls">
          <div className="new-expense__control">
            <label> Budget</label>
            <input
              type="number"
              inputMode="numeric"
              min="0.01"
              step="0.01"
              value={editBudget || ''}
              onChange={(e) => setEditBudget(+e.target.value)}
            />
          </div>
        </div>
        <div className="btn-container">
          <button
            className="edit-budget-button"
            type="button"
            onClick={closeForm}
          >
            Cancel
          </button>
          <button className="edit-budget-button" type="submit">
            Edit Budget
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditBudget;
