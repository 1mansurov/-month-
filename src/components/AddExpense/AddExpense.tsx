import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../../context/ExpenseContext';

const AddExpense = () => {
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>('Food');
  const { addExpense } = useContext(ExpenseContext);

  const handleAddExpense = () => {
    const newExpense = {
      id: Date.now(),
      name,
      date: new Date().toLocaleDateString(),
      amount,
      category,
    };

    addExpense(newExpense);
    setName('');
    setAmount(0);
  };

  return (
    <div className="card">
      <h3>Expenses</h3>
      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Travel">Travel</option>
      </select>
      <button className="add-expense-btn" onClick={handleAddExpense}>
        + Add Expense
      </button>
    </div>
  );
};

export default AddExpense;
