/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import {render, screen, cleanup} from '@testing-library/react';
import {Input} from './Input';

afterEach(() => {
  cleanup();
});

test('Should render input component', () => {
  render(<Input label="Email" />);
  const inputElement = screen.getByTestId('input-test');
  expect(inputElement).toBeInTheDocument();
});

test('Input with error', () => {
  render(<Input label="Email" isError={true} />);
  const inputElement = screen.getByTestId('input-test');
  expect(inputElement).toHaveClass('input-error');
});

test('Input with no error', () => {
  render(<Input label="Email" />);
  const inputElement = screen.getByTestId('input-test');
  expect(inputElement).not.toHaveClass('input-error');
});
