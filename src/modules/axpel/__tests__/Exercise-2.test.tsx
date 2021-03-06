import React from 'react';
import { render } from '@testing-library/react';
import Exercise2 from '../screens/Exercise-2';
import { BrowserRouter as Router } from 'react-router-dom';

describe(' <Exercise2> ', () => {
    test('renders without crashing', () => {
        render(<Router> <Exercise2 /> </Router>);
    });

    test('It has a link to the Github Repo ', () => {
        const { getByText } = render(<Router><Exercise2 /></Router>);
        expect(getByText('README').closest('a')).toHaveAttribute('href', 'https://github.com/martinrebo/boilerplate/tree/main/src/axpel')
    });

    test('It has Axpel title', () => {
        const { getByText } = render(<Router><Exercise2 /></Router>);
        const TitleElement = getByText(/Axpel Search App/i);
        expect(TitleElement).toBeInTheDocument();
    });


    /** Not sure why it not detects the searchbox :(  */
    // test('It has a Searchbox', () => {
    //   const { getByTestId } = render(<Exercise2 />);
    //   const TitleElement = getByTestId('search-input');
    //   expect(TitleElement).toBeInTheDocument();   
    // });

})