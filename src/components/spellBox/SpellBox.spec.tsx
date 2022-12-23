import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { SpellBoxProps, SpellBox } from './SpellBox';

const defaultProps: SpellBoxProps = {
  spell: {
    id: 'sdas',
    description: 'sdas',
    image: {
      full: 'sdas',
    },
    name: 'sdas',
    key: 'sdas',
  },
};

const setup = (props?: Partial<SpellBoxProps>) => {
  const SpellBoxProps = { ...props };

  return render(<SpellBox {...defaultProps} {...SpellBoxProps} />);
};

describe('<SpellBox />', () => {
  describe('check render', () => {
    it('should render key', () => {
      const { getByText } = setup();
      expect(getByText(defaultProps.spell.key)).toBeInTheDocument();
    });
  });
});
