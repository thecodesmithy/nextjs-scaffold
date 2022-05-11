import IndexPage from "@base/pages/index";
import { render, screen } from "@testing-library/react";

test("should render the index page", () => {
  render(<IndexPage />);

  expect(screen.getByText("Code Smithy NextJS Template")).toBeInTheDocument();
});
