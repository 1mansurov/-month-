import React, { useState } from 'react';
import { useExpenseContext } from '../../context/ExpenseContext';
import { Expense } from '../../types/expenseTypes';

type EditExpenseProps = {
  expense: Expense;
  closeEdit: () => void;
};

const EditExpense = ({ expense, closeEdit }: EditExpenseProps) => {
  const { dispatch } = useExpenseContext();
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);
  const [date, setDate] = useState(expense.date);

  const handleEditExpense = () => {
    const updatedExpense = { ...expense, description, amount, date };

    dispatch({ type: 'EDIT_EXPENSE', payload: updatedExpense });
    closeEdit();
  };

  return (
    <div className="edit-expense">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleEditExpense}>Edit Expense</button>
    </div>
  );
};

export default EditExpense;

