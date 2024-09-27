export type Expense = {
    id: number;
    description: string;
    amount: number;
    date: string;
  };
  
  export type ExpenseAction =
    | { type: 'ADD_EXPENSE'; payload: Expense }
    | { type: 'EDIT_EXPENSE'; payload: Expense }
    | { type: 'ADD_BALANCE'; payload: number };
  