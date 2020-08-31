import React, {useState} from 'react'

export const Header = () => {
    const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  let [date] = useState(new Date())
  return (
    <div className="headerClass">
      <h2> Expense Tracker for {months[date.getMonth()]} </h2>
    </div>   
  )
}