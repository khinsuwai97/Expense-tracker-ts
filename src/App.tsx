import NexExpense from './components/NexExpense/NewExpense';
import OwnBudget from './components/OwnBudget/OwnBudget';
import ShowBudget from './components/ShowBudget/ShowBudget';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  return (
    <>
      <h2 className="buget-planner">My Budget Planner</h2>
      <OwnBudget />
      <NexExpense />
      <ShowBudget />
      <Expenses />
    </>
  );
};

export default App;
