import React from "react";

const AddExpenseForm = () => {
    return(
        <form>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        required='required' 
                        type='text' 
                        className="form-control" 
                        id="name">
                    </input>
                </div>
                <div className="col-sm">
                    <label htmlFor="cost" className="form-label">Cost</label>
                    <input 
                        required='required' 
                        type='text' 
                        className="form-control" 
                        id="cost">
                    </input>
                </div>
            </div>
            <div className="col-sm mt-4">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
        </form>
    )
}

export default AddExpenseForm;