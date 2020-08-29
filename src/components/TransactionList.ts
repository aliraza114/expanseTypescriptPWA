import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>{ transactions.length < 1 ? 'No Transaction History Yet' : '' }</h3>
      <ul className="list">   
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}