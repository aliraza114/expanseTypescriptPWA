import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// Initial state
let initialState = {
  transactions: [],
  updateTransactionList: [],
  isUpdate: false
}


// Create context

export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
    
  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function updateFalse(value){
    dispatch({
      type: 'CHANGE_STATE',
      payload: value
    })
  }

  function updateTransaction(updateTransactionList){
    dispatch({
      type: 'UPDATE_TRANSACTION_SETUP',
      payload: updateTransactionList
    })
  }

  function updateTransValue(transaction){
    dispatch({
      type: 'UPDATE_TRANSACTION_VALUE',
      payload: transaction
    })
  }
  

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    isUpdate: state.isUpdate,
    updateTransactionList: state.updateTransactionList,
    deleteTransaction,
    addTransaction,
    updateTransaction,
    updateFalse,
    updateTransValue,
  }}>
    {children}
  </GlobalContext.Provider>);
}