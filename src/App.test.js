import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

test("renders Add Note and Submit text", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const label = screen.getByText(/Add Note/i);
  const button = screen.getByText(/Submit/i);

  expect(label).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
