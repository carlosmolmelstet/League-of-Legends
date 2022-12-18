function variantGradient(props: Record<string, any>) {
  const colorsMap = {
    error: {
      bg: 'transparent linear-gradient(216deg, #DC2525 0%, #A73232 100%) 0% 0% no-repeat padding-box',
      color: 'white',
    },
    success: {
      bg: 'transparent linear-gradient(218deg, #31DC25 0%, #38C73D 100%) 0% 0% no-repeat padding-box',
      color: 'white',
    },
  };

  const { status } = props;

  const colors = colorsMap[status];

  return {
    container: {
      bg: colors.bg,
      color: colors.color,
    },
  };
}

const baseStyle = {
  container: {
    paddingY: '12px',
    paddingX: '17px',
    borderRadius: '10px',
    font: 'normal normal normal 14px/19px Inter',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const variants = {
  gradient: variantGradient,
};

const config = {
  baseStyle,
  variants,
};

export default config;
