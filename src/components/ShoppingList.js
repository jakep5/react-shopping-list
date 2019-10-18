import React from 'react'
import ShoppingListItem from './ShoppingListItem'


function ShoppingList(props) {
    return (
        <ul>
            {props.items.map((item, i) =>
                <ShoppingListItem
                    key={i}
                    item={item}
                    onDeleteItem = {props.onDeleteItem} /*These will then be passed to ShoppingListItem, which can then be added as onClick functions to their respective buttons*/
                    onCheckItem = {props.onCheckItem}
                    />
                )}
        </ul>
    )
}

ShoppingList.defaultProps = {
    items: []
}

export default ShoppingList