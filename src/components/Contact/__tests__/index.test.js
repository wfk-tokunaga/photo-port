import React from 'react';
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ContactForm from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Contact component', () => {
    // renders About test

    // baseline test
    it('renders', () => {
      render(<ContactForm/>);
    })
    
    // snapshot test
    it('matches snapshot', () => {
        //render Nav
        const {asFragment} = render(<ContactForm/>);
        expect(asFragment()).toMatchSnapshot();
    })

    it('renders', () => {
        const { getByTestId } = render(<ContactForm/>)
        expect(getByTestId('contact')).toHaveTextContent('Contact me')
    })
    
    it('renders', () => {
        const { getByTestId } = render(<ContactForm/>)
        expect(getByTestId('submit')).toHaveTextContent('Submit')
    })
})

