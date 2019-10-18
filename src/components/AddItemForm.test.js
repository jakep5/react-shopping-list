import React from 'react'
import {shallow} from 'enzyme'
import AddItemForm from './AddItemForm'
import toJson from 'enzyme-to-json'
import { exportAllDeclaration } from '@babel/types'

describe(`AddItemForm component`, () => {
    it ('renders the complete form', () => {
        const wrapper = shallow(<AddItemForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})