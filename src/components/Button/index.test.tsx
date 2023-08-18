import React from "react";
import { render } from "@testing-library/react-native";

import { Button } from "@components/index";

import theme from "../../theme";
import { ThemeProvider } from "styled-components/native";

describe("Button", () => {
  let button: JSX.Element;

  beforeEach(() => {
    const title = "Entrar";

    button = (
      <ThemeProvider theme={theme}>
        <Button title={title} onPress={() => { }} />
      </ThemeProvider>
    );
  });

  it("Should verify if button title is displayed correctly", () => {
    const title = "Entrar";

    const { getByText } = render(button);

    const titleElement = getByText(title);
    expect(titleElement).toBeTruthy();
  });

  it("Should verify if the button is primary", () => {
    const type = "PRIMARY";

    const { getByTestId } = render(
      React.cloneElement(button, { type })
    );

    const containerElement = getByTestId("button-container");

    expect(containerElement.props.style.backgroundColor).toBe(theme.COLORS.GREEN);
  });
});
