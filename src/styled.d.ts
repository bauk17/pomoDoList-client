import "styled-components";

import { PomodoroTheme } from "./types/PomodoroTheme";

declare module "styled-components" {
  export interface DefaultTheme extends PomodoroTheme {}
}
