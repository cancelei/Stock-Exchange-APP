import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';
import NavElement from '../NavElement/NavElement';

describe('Tests the Header component', () => {
  const component = (
    <BrowserRouter>
      <Provider store={configureStore}>
        <NavElement />
      </Provider>
    </BrowserRouter>
  );

  test('Match the snapshot', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });

  test('Should display the text', () => {
    render(component);
    const text = screen.getByText('Stock Prices');
    expect(text).toBeInTheDocument();
  });
});
