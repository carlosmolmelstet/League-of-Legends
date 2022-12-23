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
  global: {
    html: {
      'scroll-behavior': 'smooth',
    },
  },
  config: {
    cssVarPrefix: 'molmelstet',
  },
});

type Theme = typeof chakraTheme;

export type { Theme };
export default chakraTheme;
