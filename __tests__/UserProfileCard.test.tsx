import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/app/features/user/userSlice";
import UserProfileCard from "@/app/components/profile/UserProfileCard";

describe("UserProfileCard", () => {
  it("renders user's name, level, and XP", () => {
    const store = configureStore({
      reducer: { user: userReducer },
      preloadedState: {
        user: {
          profile: {
            name: "Jane Doe",
            level: 3,
            xp: 75,
            avatarUrl: "",
          },
        },
      },
    });

    render(
      <Provider store={store}>
        <UserProfileCard />
      </Provider>
    );

    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("Level 3")).toBeInTheDocument();
    expect(screen.getByText("XP: 75%"))?.toBeInTheDocument();
  });

  it("does not render anything if no user profile exists", () => {
    const store = configureStore({
      reducer: { user: userReducer },
      preloadedState: { user: { profile: null } },
    });

    const { container } = render(
      <Provider store={store}>
        <UserProfileCard />
      </Provider>
    );

    expect(container.firstChild).toBeNull();
  });
});