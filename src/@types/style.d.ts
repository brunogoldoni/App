/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line import/no-unresolved
import "styled-componens";
import theme from "../theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme extends ThemeType {}
}
