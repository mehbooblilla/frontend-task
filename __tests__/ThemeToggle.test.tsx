import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/app/features/theme/themeSlice";
import ThemeToggle from "@/app/components/common/ThemeToggle";

describe("ThemeToggle", () => {
  it("toggles dark mode", () => {
    const store = configureStore({
      reducer: { theme: themeReducer },
      preloadedState: { theme: { isDark: false, loading: false } },
    });

    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );

    const button = screen.getByRole("button");
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    fireEvent.click(button);
    expect(store.getState().theme.isDark).toBe(true);
  });
});
