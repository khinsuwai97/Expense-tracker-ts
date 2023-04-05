import { createContext } from 'react';
import { ExpenseObj } from '../types/types';

export const ExpenseContext = createContext<ExpenseObj>({
  expenses: [],
  totalBudget: 0,
  totalExpense: 0,
  remainingAmount: 0,
  sortValue: 'featured',
  showEditForm: false,
  editingExpense: { id: '', title: '', amount: 0, date: new Date() },
  getBudget() {},
  getExpenses() {},
  handleSort() {},
  removeExpense() {},
  editExpense() {},
  closeEditForm() {},
  openEditForm() {},
  getEditItem() {},
});
