import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';
import Homepage from '../Homepage';

describe('Tests the home page', () => {
  const component = (
    <Provider store={configureStore}>
      <Homepage />
    </Provider>
  );

  test('Match the snapshot', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });

  test('Should contain an image component', () => {
    render(component);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
