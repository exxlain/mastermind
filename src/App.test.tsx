import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders start button', () => {
  const { getByText, getByRole } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText(/start/i)).toBeInTheDocument();
  expect(getByRole('button')).toBeInTheDocument();
});
