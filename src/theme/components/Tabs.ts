const baseStyle = props => {
  const { colorScheme } = props;
  const colorsMap = {
    blue: {
      color: '#113C64',
    },
  };

  return {
    tab: {
      color: '#898994',
      _selected: {
        fontWeight: '700',
        color: colorsMap[colorScheme].color,
      },
    },
  };
};

const config = {
  baseStyle,
};

export default config;
