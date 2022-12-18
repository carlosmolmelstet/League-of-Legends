const variantLogin = {
  bg: 'transparent linear-gradient(180deg, #37CFFF 0%, #05B0F6 100%) 0% 0% no-repeat padding-box',
  font: 'normal normal bold 20px/8px Inter',
  borderRadius: '1rem',
  width: '100%',
  color: 'white',
  letterSpacing: '1.78px',
  padding: {
    base: 3,
    xl: 37,
  },
  _hover: {
    filter: 'brightness(106%)',
  },
  _active: {
    filter: 'brightness(96%)',
  },
};

function variantPrimary(props: Record<string, any>) {
  const sizesMap = {
    lg: {
      bg: '#165896',
      padding: 6,
      color: 'white',
      _hover: {
        bg: 'primary.dark',
        _disabled: {
          bg: 'primary.light',
          opacity: '0.24',
        },
      },
      _disabled: {
        bg: 'primary.light',
        opacity: '0.24',
      },
      _focus: {
        borderColor: 'secondary.base',
      },
    },
    md: {
      bg: '#165896',
      padding: '1rem 1.5rem',
      color: 'white',
      _hover: {
        bg: 'primary.dark',
        _disabled: {
          bg: 'primary.light',
          opacity: '0.24',
        },
      },
      _disabled: {
        bg: 'primary.light',
        opacity: '0.24',
      },
      _focus: {
        borderColor: 'secondary.base',
      },
    },
    sm: {
      bg: '#165896',
      padding: '0.75rem 1.5rem',
      color: 'white',
      _hover: {
        bg: 'primary.dark',
        _disabled: {
          bg: 'primary.light',
          opacity: '0.24',
        },
      },
      _disabled: {
        bg: 'primary.light',
        opacity: '0.24',
      },
      _focus: {
        borderColor: 'secondary.base',
      },
    },
  };

  const style = {
    borderRadius: 8,
    fontSize: '1rem',
    fontStyle: 'normal',
    fontFamily: 'Uni Neue',
    fontWeight: 'bold',
    lineHeight: '100%',
    ...sizesMap[props.size],
  };

  return style;
}

function variantGradient(props: Record<string, any>) {
  const colorsMap = {
    blue: {
      bg: 'transparent linear-gradient(180deg, #37CFFF 0%, #05B0F6 100%) 0% 0% no-repeat padding-box',
      color: 'white',
      _hover: {
        filter: 'brightness(106%)',
        _disabled: {
          bg: 'transparent linear-gradient(180deg, #37CFFF 0%, #05B0F6 100%) 0% 0% no-repeat padding-box',
          filter: 'none',
        },
      },
      _active: {
        filter: 'brightness(96%)',
      },
    },
  };

  const colors = colorsMap[props.colorScheme];

  return colors;
}

const variants = {
  login: variantLogin,
  gradient: variantGradient,
  primary: variantPrimary,
};

const config = {
  variants,
};

export default config;
