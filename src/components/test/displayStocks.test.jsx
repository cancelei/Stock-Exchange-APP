import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';
import DisplayStocks from '../displayData/displayStocks';

describe('Tests the Header component', () => {
  const component = (
    <BrowserRouter>
      <Provider store={configureStore}>
        <DisplayStocks />
      </Provider>
    </BrowserRouter>
  );

  test('Match the snapshot', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });

  test('Should contain an input component', () => {
    render(component);
    const inputElement = screen.getByPlaceholderText('search stock');
    expect(inputElement).toBeInTheDocument();
  });
});
