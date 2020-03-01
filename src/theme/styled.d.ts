// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      success: string;
      successLight: string;
      error: string;
      errorLight: string;
      black: string;
      white: string;
    };
  }
}

// From documentation: https://www.styled-components.com/docs/api#typescript
// Investigate why the types are not available when actually styling components
