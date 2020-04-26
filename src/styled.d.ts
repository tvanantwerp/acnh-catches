// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    containerBackgroundColor: string;
    darkBrown: string;
    fontFamily: string;
    buttonBlue: string;
    buttonBlueHover: string;
    labelYellow: string;
    labelYellowHover: string;
    lightGreen: string;
    teaGreen: string;
    fontSize: string;
  }
}
