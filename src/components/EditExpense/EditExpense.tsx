import React, { FormEvent, useState } from 'react';
import Modal from '../UI/Modal';
import './EditExpense.css';
import moment from 'moment';
import useExpenseContext from '../../context/useExpenseContext';
import { ExpensesData } from '../../types/types';

type EditExpenseProps = {
  expense: ExpensesData;
};
const formateDate = (date: Date) =>
  moment(new Date(date)).format().slice(0, 10);

const EditExpense: React.FC<EditExpenseProps> = () => {
  const { editingExpense, closeEditForm, editExpense } = useExpenseContext();
  const [editTitle, setEditTitle] = useState(editingExpense!.title);
  const [editAmount, setEditAmount] = useState(editingExpense!.amount);
  const [editDate, setEditDate] = useState(formateDate(editingExpense!.date));

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const editExpenseData = {
      id: editingExpense!.id,
      title: editTitle,
      amount: editAmount,
      date: new Date(editDate),
    };

    editExpense(editExpenseData);
    closeEditForm();
  };

  return (
    <Modal>
      <form onSubmit={onFormSubmit}>
        <div className="edit-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label>Expense</label>
            <input
              type="number"
              inputMode="numeric"
              min="0.01"
              step="0.01"
              value={editAmount || ''}
              onChange={(e) => setEditAmount(+e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2023-01-01"
              max="2025-12-31"
              value={editDate}
              onChange={(e) => setEditDate(e.target.value)}
            />
          </div>
        </div>
        <div className="btn-container">
          <button
            className="edit-expense-button"
            type="button"
            onClick={closeEditForm}
          >
            Cancel
          </button>
          <button className="edit-expense-button" type="submit">
            Edit Expense
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditExpense;
