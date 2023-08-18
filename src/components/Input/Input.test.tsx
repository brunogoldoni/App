import React from "react";

import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import Input from "@components/Input";

describe("Input", () => {
  const theme = {
    FONT_SIZE: { S_10: 14 },
    backgroundColor: "transparent",
    FONT_FAMILY: { REGULAR: "Arial" },
    COLORS: { GRAY_100: "gray", WHITE: "white" }
  };

  it("renders correctly with the given props", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input testID="custom-input" placeholder="Enter your name" />
      </ThemeProvider>
    );

    const inputElement = getByTestId("custom-input");
    expect(inputElement.props.placeholder).toBe("Enter your name");
  });

  it("has placeholderTextColor set to the theme color", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input testID="custom-input" />
      </ThemeProvider>
    );

    const inputElement = getByTestId("custom-input");
    expect(inputElement.props.placeholderTextColor).toBe(theme.COLORS.GRAY_100);
  });
});
