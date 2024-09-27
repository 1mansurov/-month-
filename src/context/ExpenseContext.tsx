import React, { createContext, useReducer, ReactNode } from 'react';

interface Expense {
  id: number;
  name: string;
  date: string;
  amount: number;
  category: string;
}

interface ExpenseState {
  balance: number;
  expenses: Expense[];
}

type Action =
  | { type: 'ADD_EXPENSE'; payload: Expense }
  | { type: 'DELETE_EXPENSE'; id: number }
  | { type: 'ADD_BALANCE'; amount: number };

interface ExpenseContextType extends ExpenseState {
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: number) => void;
  addBalance: (amount: number) => void;
}

const initialState: ExpenseState = {
  balance: 0,
  expenses: [],
};

export const ExpenseContext = createContext<ExpenseContextType | undefined>(
  undefined
);

const expenseReducer = (state: ExpenseState, action: Action): ExpenseState => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.id),
      };
    case 'ADD_BALANCE':
      return { ...state, balance: state.balance + action.amount };
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const addExpense = (expense: Expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  const deleteExpense = (id: number) => {
    dispatch({ type: 'DELETE_EXPENSE', id });
  };

  const addBalance = (amount: number) => {
    dispatch({ type: 'ADD_BALANCE', amount });
  };

  return (
    <ExpenseContext.Provider
      value={{
        balance: state.balance,
        expenses: state.expenses,
        addExpense,
        deleteExpense,
        addBalance,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
