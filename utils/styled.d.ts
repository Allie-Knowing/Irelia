// import original module declarations
import "@emotion/react";
import { Theme as NewTheme } from "./theme";

// and extend them!
declare module "@emotion/react" {
  export interface Theme extends NewTheme {}
}
