import React from "react";

const ExpenseList = () => {
    const expenses = [
        {id: 1, name: "Shopping", cost: 50},
        {id: 2, name: "Gaming", cost: 20},
        {id: 3, name: "Studying", cost: 100},
    ]

    return(
        <ul>
            {expenses.map((expense)=>(
                <ExpenseItem 
                    id={expense.id} 
                    name={expense.name} 
                    cost={expense.cost}
                />
            ))}
        </ul>
    )
}