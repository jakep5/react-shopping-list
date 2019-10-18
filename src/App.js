import React from 'react';
import AddItemForm from './components/AddItemForm'
import ShoppingList from './components/ShoppingList'

class App extends React.Component {
  state = {
    shoppingItems: [
      { name: 'apples', checked: false },
      { name: 'oranges', checked: false },
      { name: 'bread', checked: false },
    ]
  }

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }

  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  handleAddItem = (itemName) => {
    const newItems = [
      ...this.state.shoppingItems,
      { name: itemName, checked: false}
    ]
    this.setState({
      shoppingItems: newItems
    })
  }

  render () {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm onAddItem={this.handleAddItem}/>
          </section>
          <section>
            <ShoppingList 
              items={this.state.shoppingItems} 
              onDeleteItem={this.handleDeleteItem} /*These will both need to be passed from ShoppingList to ShoppingListItem in order to be used by the buttons*/
              onCheckItem={this.handleCheckItem} /*THESE ARE CALLBACK PROPS*****/
            />
          </section>
        </main>
      </>
    )
  }
}


export default App;
