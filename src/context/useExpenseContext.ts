import { useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';

const useExpenseContext = () => {
  return useContext(ExpenseContext);
};

export default useExpenseContext;
