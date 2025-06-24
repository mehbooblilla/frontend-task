import { render, screen } from "@testing-library/react";
import BenefitsGrid from "@/app/components/benefits/BenefitsGrid";

describe("BenefitsGrid", () => {
  it("renders all benefit cards", () => {
    render(<BenefitsGrid />);
    expect(screen.getByText("50% Off")).toBeInTheDocument();
    expect(screen.getByText("Free Voucher")).toBeInTheDocument();
    expect(screen.getByText("Gold Membership")).toBeInTheDocument();
  });
});
