export type ExpensesData = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

export type ExpenseObj = {
  expenses: ExpensesData[];
  totalBudget: number;
  remainingAmount: number;
  totalExpense: number;
  sortValue: string;
  showEditForm: boolean;
  editingExpense: ExpensesData | undefined;
  getBudget: (budget: number) => void;
  getExpenses: (expensesData: ExpensesData) => void;
  handleSort: (sortValue: string) => void;
  removeExpense: (id: string) => void;
  editExpense: (expense: ExpensesData) => void;
  closeEditForm: () => void;
  openEditForm: () => void;
  getEditItem: (id: string) => void;
};
