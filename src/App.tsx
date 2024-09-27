import React from 'react';
import { ExpenseProvider } from './context/ExpenseContext';
import AddExpense from './components/AddExpense/AddExpense';
import ExpenseList from './components/ExpenseList/ExpenseList.';
import AddBalance from './components/AddBalance/AddBalance';

const App = () => {
  return (
    <ExpenseProvider>
      <div>
        <h1>Expense Tracker</h1>
        <AddBalance />
        <AddExpense />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
};

export default App;
