import { render, screen } from "@testing-library/react";
import RewardsProgress from "@/app/components/rewards/RewardsProgress";
jest.mock("react-chartjs-2", () => ({
  Doughnut: () => <div>Mocked Chart</div>,
}));
describe("RewardsProgress", () => {
  it("renders reward chart heading", () => {
    render(<RewardsProgress />);
    expect(screen.getByText("Reward Points")).toBeInTheDocument();
  });
});