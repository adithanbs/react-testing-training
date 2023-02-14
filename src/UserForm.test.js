  
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';


test('it show two inputs and button',() => {

// render the component
render(<UserForm/>)
// Manipulate the component or find an element in it
const inputs = screen.getAllByRole('textbox');
const button = screen.getByRole('button');

// Assertion - make sure the component is doing
expect (inputs).toHaveLength(2)
expect (button).toBeInTheDocument();

})
test('it calls onUserAdd when the form is submitted',() => {
// render the component  
const mock = jest.fn();

render (<UserForm onUserAdd = {mock} />)
// Find the two inputs
const nameInput = screen.getByRole('textbox',{
  name:/name/i
})
const emailInput = screen.getByRole('textbox',{
  name:/email/i
})
 // Simulate typing in a name
user.click(nameInput);
user.keyboard('jane');


// Simulate typing in an email
user.click(emailInput);
user.keyboard('jane@gmail.com');

// Find the button
const button = screen.getByRole('button');


// Simulate clicking the button
user.click(button)

// Assertion to make sure 'onUserAdd' gets called with email/name
expect(mock).toHaveBeenCalled();
expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@gmail.com' });
});
