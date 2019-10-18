import React from 'react'
import ReactDOM from 'react-dom'

class AddItemForm extends React.Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.onAddItem(e.target.itemToAdd.value) //callback to the onAddItem function passed from App.js
    }
    render () {
        return (
            <form onSubmit={this.onSubmitForm}> 
                <input
                    type="text"
                    placeholder="carrots"
                    aria-label="Shopping list item"
                    name="itemToAdd" 
                />
                <button type="submit">Add Item</button>
            </form>
        )
    }
}

export default AddItemForm;