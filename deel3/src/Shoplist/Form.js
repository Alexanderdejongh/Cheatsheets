import React from 'react'

function Form(props) {

    return (
        <form className="form" onSubmit={props.addItem}>
            <div className="form-input">
                <label  className="labelForm" htmlFor="newItemInput">Add New Items</label>
                <input type="text"></input>
            </div>
            <button type="submit" className="btn">Add</button>
        </form>
    )
}

export default Form
