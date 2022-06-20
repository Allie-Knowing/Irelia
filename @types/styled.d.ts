// import original module declarations
import "@emotion/react";
import { Theme as NewTheme } from "@utils/theme";

// and extend them!
declare module "@emotion/react" {
  export interface Theme extends NewTheme {}
}
