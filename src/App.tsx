import React from 'react';
import { AddTransaction } from './components/AddTransaction';
import { IncomeExpenses } from './components/IncomeExpanses';
import { Header } from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import { Balance } from './components/Balance';
import { TransactionList } from './components/TransactionList';
import { UpdateTransaction } from './components/UpdateTransaction'


import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
      <IncomeExpenses />
        <TransactionList />
        <UpdateTransaction/>
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;