// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkGreen: string;
      lightGreen: string;
      red: string;
      yellow: string;
      orange: string;
      darkGray: string;
      redHover: string;
      offWhite: string;
      redForbidden: string;
      lightGreenHover: string;
    };
    layout: {
      maxWidth: string;
      section: string;
    };
    styles: {
      borderRadius: string;
      boxShadow: string;
      transition: string;
    };
  }
}
