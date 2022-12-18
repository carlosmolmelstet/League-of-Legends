const baseStyle = {
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    background: 'gray.100',
    backgroundColor: 'transparent',
    borderLeft: '1px solid',
    borderColor: 'inherit',
    right: 0,
    color: '#E2E8F0',
  },
};

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

const defaultProps = {
  iconColor: '#E2E8F0',
};

const config = {
  sizes,
  baseStyle,
  defaultProps,
};

export default config;
