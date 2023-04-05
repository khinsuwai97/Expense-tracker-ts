import React, { PropsWithChildren, useState } from 'react';
import { ExpensesData } from '../types/types';
import { ExpenseObj } from '../types/types';
import { ExpenseContext } from './ExpenseContext';

export const ExpenseProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [expenses, setExpenses] = useState<ExpensesData[]>([]);

  const [editingExpense, setEditingExpense] = useState<
    ExpensesData | undefined
  >(expenses[0]);
  const [totalBudget, setTotalBudget] = useState(0);
  const [sortValue, setSortValue] = useState('featured');
  const [showEditForm, setShowEditForm] = useState(false);
  const totalExpense = expenses.reduce((acc, cur) => acc + cur.amount, 0);
  const remainingAmount = totalBudget - totalExpense;
  let sortedExpenses: ExpensesData[];

  const getBudget = (budget: number): void => {
    setTotalBudget(budget);
  };

  const getExpenses = (expensesData: ExpensesData): void => {
    setExpenses((prevExpense) => [...prevExpense, expensesData]);
  };

  const handleSort = (sortValue: string): void => {
    setSortValue(sortValue);

    if (sortValue === 'featured') {
      sortedExpenses = [...expenses];
    } else if (sortValue === 'asc') {
      sortedExpenses = [...expenses].sort((a, b) => a.amount - b.amount);
    } else if (sortValue === 'des') {
      sortedExpenses = [...expenses].sort((a, b) => b.amount - a.amount);
    }

    setExpenses(sortedExpenses);
  };

  const removeExpense = (id: string): void => {
    setExpenses((prevExpense) =>
      prevExpense.filter((expense) => expense.id !== id)
    );
  };

  const editExpense = (expense: ExpensesData): void => {
    const updatedExpense = expenses.map((prevExpense) =>
      prevExpense.id === expense.id ? expense : prevExpense
    );
    setExpenses(updatedExpense);
  };

  const closeEditForm = () => {
    setShowEditForm(false);
  };

  const openEditForm = () => {
    setShowEditForm(true);
  };

  const getEditItem = (id: string) => {
    const editingItem = expenses.find((expense) => expense.id === id);
    setEditingExpense(editingItem);
    openEditForm();
  };

  const contextValue: ExpenseObj = {
    expenses,
    getBudget,
    totalBudget,
    getExpenses,
    totalExpense,
    remainingAmount,
    handleSort,
    sortValue,
    removeExpense,
    editExpense,
    openEditForm,
    closeEditForm,
    showEditForm,
    getEditItem,
    editingExpense,
  };
  return (
    <ExpenseContext.Provider value={contextValue}>
      {children}
    </ExpenseContext.Provider>
  );
};
