import React from 'react'

function ShoppingListItem(props) {
    return (
        <li> 
            <h2 style={{
                textDecoration: props.item.checked ? 'line-though' : null,
            }}>
                {props.item.name}
            </h2>
            <button type="button" onClick={() => props.onCheckItem(props.item)}>check</button>
            <button type="button" onClick={() => props.onDeleteItem(props.item)}>delete</button>
        </li>
    )
}

ShoppingListItem.defaultProps = {
    item: {}
}

export default ShoppingListItem