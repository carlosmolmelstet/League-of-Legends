import { getColor, mode } from '@chakra-ui/theme-tools';

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode('blue.500', 'blue.300')(props),
    errorBorderColor: ec || mode('red.700', 'red.300')(props),
  };
}

function variantLogin(props: Record<string, any>) {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      border: '2px solid',
      borderColor: mode('inherit', 'gray.300')(props),
      borderRadius: '1rem',
      bg: 'inherit',
      paddingY: {
        base: 6,
        xl: 37,
      },
      paddingLeft: {
        xl: 62,
      },
      font: {
        base: 'normal normal normal 12px/14px Uni Neue',
        xl: 'normal normal normal 17px/24px Uni Neue',
      },
      _hover: {
        borderColor: mode('gray.300', 'whiteAlpha.400')(props),
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0 0 0 1px ${getColor(theme, ec)}`,
      },
      _focus: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: `0 0 0 1px ${getColor(theme, fc)}`,
      },
    },
    addon: {
      border: '2px solid',
      borderColor: mode('inherit', 'whiteAlpha.50')(props),
      bg: mode('gray.100', 'whiteAlpha.300')(props),
    },
  };
}

function variantNegative(props: Record<string, any>) {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      border: '0',
      borderColor: 'inherit',
      borderRadius: '4',
      bg: 'white',
      color: 'gray.800',
      paddingY: {
        base: 6,
      },
      font: {
        base: 'normal normal normal 12px/14px Inter, sans-serif',
        xl: 'normal normal normal 17px/24px Inter, sans-serif',
      },
      _hover: {
        borderColor: mode('gray.300', 'whiteAlpha.400')(props),
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _invalid: {
        boxShadow: `0 0 0 2px ${getColor(theme, ec)}`,
      },
      _focus: {
        zIndex: 1,
        boxShadow: `0 0 0 2px ${getColor(theme, fc)}`,
      },
    },
  };
}

const size = {
  lg: {
    borderRadius: 2,
  },

  md: {
    borderRadius: 2,
  },

  sm: {
    borderRadius: 2,
  },

  xs: {
    borderRadius: 2,
  },
};

const sizes = {
  lg: {
    field: size.lg,
    addon: size.lg,
  },
  md: {
    field: size.md,
    addon: size.md,
  },
  sm: {
    field: size.sm,
    addon: size.sm,
  },
  xs: {
    field: size.xs,
    addon: size.xs,
  },
};

const baseStyle = {
  field: {
    bg: '#7159c1',
    borderRadius: '25px',
    _readOnly: {
      opacity: '0.35',
      // borderWidth: '1px',
      _invalid: {
        boxShadow: '0 0 0 1px #e53e3e !important',
      },
    },
  },
  element: {
    borderRadius: '25px',
  },
};

const variants = {
  login: variantLogin,
  negative: variantNegative,
};

const config = {
  baseStyle,
  variants,
  sizes,
};

export default config;
