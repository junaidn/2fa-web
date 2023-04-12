/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import {render, screen, cleanup} from '@testing-library/react';
import {AuthDetail} from './AuthDetail';
import {AuthCodeStore} from '../../mobx-store/AuthCodeStore';

afterEach(() => {
  cleanup();
});

test('Should render auth detail component', () => {
  render(<AuthDetail code="554893" service="Github" timer={60} />);
  const authDetailCard = screen.getByTestId('auth-detail-test');
  expect(authDetailCard).toBeInTheDocument();
});

test('Service name should match with first stored code in mobx store', () => {
  const store = new AuthCodeStore();
  const serviceName = 'Facebook';
  store.addService(serviceName);
  render(<AuthDetail {...store.getServices()[0]} />);
  const serviceElement = screen.getByTestId('auth-service-test');
  expect(serviceElement).toHaveTextContent(serviceName);
});
