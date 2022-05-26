import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Modal from '..';

const mockToggleModal = () => {
    return 'Close this modal';
}

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

afterEach(cleanup);

describe(Modal, () => {
    it('renders', () => {
        render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto}></Modal>)
    });

    it('matches snapshot DOM node structure', () => {
        // Arrange snapshot
        const {asFragment} = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto}></Modal>);
        // Assert the match
        expect(asFragment()).toMatchSnapshot();
    })

    // describe('Click event', () => {
    //     it('Calls onClose handler', () => {
    //         // Arrange: Render Modal
    //         const {getByText} = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto}></Modal>);
    //         // Act: Simulate click event
    //         fireEvent.click(getByText('Close this modal'));
    //         // Assert: Expected matcher
    //         expect(mockToggleModal).toHaveBeenCalledTimes(1);
    //     })
    // })
})