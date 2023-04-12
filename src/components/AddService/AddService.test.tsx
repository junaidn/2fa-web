/* eslint-disable react/react-in-jsx-scope */
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

import '@testing-library/jest-dom';
import {render, cleanup, fireEvent, screen} from '@testing-library/react';
import {AuthCodeStore} from '../../mobx-store/AuthCodeStore';
import {AddService} from './AddService';
import userEvent from '@testing-library/user-event';

afterEach(() => {
  cleanup();
});

const store = new AuthCodeStore();
test('Should not save data when input is empty', () => {
  render(<AddService authStore={store} />);

  const button = screen.getByText('Add');

  fireEvent.click(button);

  expect(store.authCodes.length).toBe(0);
});

test('Should save data when input is filled with service name and verify entered data with stored data in mobx', () => {
  render(<AddService authStore={store} />);

  const serviceInput = screen.getByTestId('input-test');
  const button = screen.getByText('Add');

  userEvent.type(serviceInput, 'Github');
  fireEvent.click(button);

  expect(store.authCodes.length).toBe(1);
  expect(store.authCodes[0].service).toEqual('Github');
});
