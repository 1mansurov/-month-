import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../../context/ExpenseContext';

const AddBalance = () => {
  const [amount, setAmount] = useState<number>(0);
  const { addBalance } = useContext(ExpenseContext);

  const handleAddBalance = () => {
    addBalance(amount);
    setAmount(0); // Reset input
  };

  return (
    <div className="card">
      <h3>Wallet Balance: ₹{amount}</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button className="add-income-btn" onClick={handleAddBalance}>
        + Add Income
      </button>
    </div>
  );
};

export default AddBalance;
