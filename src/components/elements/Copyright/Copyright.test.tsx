import React from 'react';
import {render } from '@testing-library/react';
import Copyright from './Copyright';

describe('<Copyright> ', () => {
    const { getByText} = render(<Copyright />);
    test('renders correct text', () => {
        const text = getByText(/No Copyright ©/i);
        expect(text).toBeInTheDocument();
    });

})

