import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';
import Detailpage from '../Detailpage';

describe('Tests the details page', () => {
  const component = (
    <Provider store={configureStore}>
      <BrowserRouter>
        <Detailpage />
      </BrowserRouter>
    </Provider>
  );

  it('Match the snapshot', () => {
    const tree = render(component).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
