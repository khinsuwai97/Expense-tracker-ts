import React, { FormEvent, useState } from 'react';
import './ExpenseForm.css';
import useExpenseContext from '../../context/useExpenseContext';
import { ExpensesData } from '../../types/types';

type FormProps = {
  closeForm: () => void;
};

const ExpenseForm: React.FC<FormProps> = ({ closeForm }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const { getExpenses } = useExpenseContext();

  const formIsNotValid =
    title.trim() === '' || amount.trim() === '' || date.trim() === '';

  const handleFormSumbit = (e: FormEvent) => {
    e.preventDefault();
    console.log(title, amount, date);

    if (title.trim() === '' || amount.trim() === '' || date.trim() === '') {
      return;
    }
    const expenseData: ExpensesData = {
      id: Date.now().toString(),
      title,
      amount: Number(amount),
      date: new Date(date),
    };
    getExpenses(expenseData);

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleFormSumbit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-12-31"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={closeForm}>
          Cancel
        </button>
        <button disabled={formIsNotValid} type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
