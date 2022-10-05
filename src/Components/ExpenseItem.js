import React from "react";
import { TiDelete } from 'react-icons/ti'
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseItem = (props) => {
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="badge rounded-pill bg-primary mx-3">
                    ${props.cost}
                </span>
                <TiDelete size='1.5em'></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem