import { getAllByRole, render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserList from "./UserList";

function renderComponent(){
    const users = [
        { name: "adi", email: "adi@gmail.com" },
        { name: "ram", email: "ram@gmail.com" },
      ];
      render(<UserList users={users} />);

      return {
        users
      }
}


test("render one row per user", () => {
    renderComponent()
//   const users = [
//     { name: "adi", email: "adi@gmail.com" },
//     { name: "ram", email: "ram@gmail.com" },
//   ];
  // Render the Component
  // render(<UserList users={users}/>)
//   const { container } = render(<UserList users={users} />);
  // Find all row in the component

  //   using test-id
  const rows = within(screen.getByTestId('users')).getAllByRole('row')

  //  const rows = screen.getAllByRole("row")
  // eslint-disable-next-line
//   const rows = container.querySelectorAll("tbody tr");
  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of the each user", () => {
    const { users } = renderComponent();
  for (let user of users) {
    const name = screen.getByRole("cell", {name:user.name});
    const email = screen.getByRole("cell",{ name:user.email});
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
  // screen.logTestingPlaygroundURL();
});
