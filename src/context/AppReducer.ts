export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
        case 'ADD_TRANSACTION':
          return {
            ...state,
            transactions: [action.payload, ...state.transactions]
          }
          case 'UPDATE_TRANSACTION_VALUE':
            return {
              ...state,
                  transactions: state.transactions.map(transaction => {
                      if (transaction.id === action.payload.id) {
                          return action.payload;
                      } else {
                          return transaction;
                      }
                  }),
                  isUpdate: state.isUpdate = false
            }
          
        case 'UPDATE_TRANSACTION_SETUP':
        return {
          ...state,
          updateTransactionList: state.transactions.find(transaction => transaction.id === action.payload.id),
          isUpdate: state.isUpdate = action.payload.update
        } 
        case 'CHANGE_STATE':
          return {
            ...state,
            isUpdate: state.isUpdate = action.payload
          }
      default:
        return state;
    }
  }