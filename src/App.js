import React, { useState } from "react";

import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const dummyExpenses = [
  {
    id: "e1",
    title: "Car Insurance ",
    amount: 460,
    date: new Date(2019, 3, 10),
  },
  {
    id: "e2",
    title: "hostel charges ",
    amount: 200,
    date: new Date(2020, 2, 4),
  },
  { id: "e3", title: "Mess charges", amount: 100, date: new Date(2019, 11, 5) },
  { id: "e4", title: "Wifi charges", amount: 90, date: new Date(2022, 8, 11) },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (enteredExpenseData) => {
    setExpenses((prevExpenseArray) => {
      return [enteredExpenseData, ...prevExpenseArray];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
