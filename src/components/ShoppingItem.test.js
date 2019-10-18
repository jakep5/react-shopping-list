import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ShoppingListItem from './ShoppingListItem'
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types'

describe(`ShoppingListItem component`, () => {
    it('renders empty given no item', () => {
        const wrapper = shallow(<ShoppingListItem />)
        expect(toJson(wrapper)).toMatchSnapShot()
    })
    it('renders the item when supplied', () => {
        const testItem = { name: 'test-item', checked: false }
        const wrapper = shallow(<ShoppingListItem item={testItem} />)
        expect(toJson(wrapper)).toMatchSnapShot()
    })
    it('strikes thorugh checked items', () => {
        const testItem = { name: 'checked-item', checked: true}
        const wrapper = shallow(<ShoppingListItem item={testItem} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})