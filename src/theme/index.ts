import { extendTheme } from '@chakra-ui/react';

import breakpoints from './breakpoints';
import colors from './colors';
import components from './components';
import fonts from './fonts';
import fontSizes from './fontSizes';

const chakraTheme = extendTheme({
  fontSizes,
  fonts,
  breakpoints,
  colors,
  components,
  config: {
    cssVarPrefix: 'molmelstet',
  },
  styles: {
    global: {
      'html, body': {
        bg: 'neutrals.darkest',
      },
    },
  },
});

type Theme = typeof chakraTheme;

export type { Theme };
export default chakraTheme;
