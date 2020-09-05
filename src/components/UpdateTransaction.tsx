import React, {useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
 
export const UpdateTransaction = () => {
    const { updateTransValue, isUpdate, updateTransactionList, updateFalse }:any = useContext(GlobalContext) 
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    
    const onUpdate = (e: { preventDefault: () => void }) => {
        e.preventDefault();
    
        const updateTrans = {
          id: updateTransactionList.id,
          text,
          amount: +amount
        }
        updateTransValue(updateTrans);
      }

    return (
       isUpdate ?  <div className='transactionForm'>
           
       <h3>Update Transaction</h3>
       <form onSubmit={onUpdate} >
           <div className="form-control">
           <label htmlFor="text">Description</label>
           <input required className='form-text' type="text" onChange= {(e) => setText(e.target.value)} placeholder="Enter text..." />
           </div>
           <div className="form-control">
           <label> Amount Here </label>
           <input required className='form-text' type="number"  onChange = {(e) => setAmount(+e.target.value)} placeholder="Enter amount..." />
           </div>
           <button className={ `${amount > 0 ? 'btnSuccess' : 'btnDanger'}` } > Update</button>
           <button className='btnDanger' onClick={() => updateFalse(false) } > Cancel </button>
       </form>
       </div> : null
    )
}
