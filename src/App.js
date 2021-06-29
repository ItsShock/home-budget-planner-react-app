import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import IncomesList from "./components/IncomesList";
import AddExpenseForm from "./components/AddExpenseForm";
import AddIncomesForm from "./components/AddIncomesForm";
import { AppProvider } from './context/AppContext';


const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3 d-flex justify-content-center'>Home Budget Planner</h1>
        <div className='w-25 fs-3'>
          <Budget />
        </div>
        <div className='d-flex flex-row'>
          <div className='border border-secondary border border-2 rounded w-50'>
            <h3 className='d-flex justify-content-center'>Incomes</h3>
            <AddIncomesForm />
            <IncomesList />
          </div>
          <div className='border border-secondary border border-2 roundedc w-50'>
            <h3 className='d-flex justify-content-center'>Expenses</h3>
            <AddExpenseForm />
            <ExpenseList />
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default App;
