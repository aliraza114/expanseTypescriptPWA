import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useAlert } from 'react-alert'

type Props = {
  transaction: any
}

export const Transaction: React.FC<Props> = ({ transaction }) => {
  const { isUpdate ,deleteTransaction, updateTransaction }:any= useContext(GlobalContext);
  const alert = useAlert()
  const deleteTrans = (id:any) => {
    deleteTransaction(id)
    alert.show('Transaction Deleted Successfully') 
  }

  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <button className={'iconEdit'} disabled={true ? isUpdate : false} onClick={()=> updateTransaction({id: transaction.id, update: true})} > <i className="material-icons">&#xe254;</i> </button> 
      <div className='textClass'> {transaction.text} 
        <div className='dateClass'>{ transaction.id.toLocaleDateString() }</div>
        
       </div>
      <span> { transaction.id.getHours() }:{ transaction.id.getMinutes() } </span>
      <span className={transaction.amount < 0 ? 'danger' : 'success'} > {Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTrans(transaction.id)} className="delete-btn">x</button>
    </li>
    </div>
  )
}