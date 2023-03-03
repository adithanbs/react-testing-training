import { getAllByRole, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from './App';

test('can receive a new user and show it on a list', () => {
  render(<App />);
  // find an element
  const nameInputs = screen.getByRole('textbox', {name:/name/i})
  const emailInput = screen.getByRole('textbox', {name:/email/i})
  const button = screen.getByRole('button')

  user.click(nameInputs);
  user.keyboard('adi')
  user.click(emailInput);
  user.keyboard('adi@gmail.com')

  user.click(button);

  const name = screen.getByRole('cell',{name:'adi'});
  const email = screen.getByRole('cell', {name:'adi@gmail.com'})

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();

  // screen.debug()
  // screen.logTestingPlaygroundURL();
});
