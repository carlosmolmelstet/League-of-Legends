import '@testing-library/jest-dom';
import React, { useState } from 'react';

import { act, fireEvent, render } from '@testing-library/react';

import { SkinsProps, Skins } from './Skins';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const defaultProps: SkinsProps = {
  id: 'Champion',
  skins: [
    {
      id: 'Champion_1',
      name: 'Champion_1',
      num: 1,
    },
    {
      id: 'Champion_2',
      name: 'Champion_2',
      num: 1,
    },
    {
      id: 'Champion_3',
      name: 'Champion_3',
      num: 1,
    },
    {
      id: 'Champion_4',
      name: 'Champion_4',
      num: 1,
    },
  ],
};

const setup = (props?: Partial<SkinsProps>) => {
  const SkinsProps = { ...props };

  return render(<Skins {...defaultProps} {...SkinsProps} />);
};

describe('<Skins />', () => {
  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(
      jest.requireActual('react').useState
    );
  });

  describe('check render', () => {
    it('should render all skins name', () => {
      const { getByText } = setup();
      defaultProps.skins.map(skin => {
        expect(getByText(skin.name)).toBeInTheDocument();
      });
    });

    it('should render all skins images', () => {
      const { container } = setup();

      defaultProps.skins.map(skin => {
        const img = container.querySelector(
          `#tile_${defaultProps.id}_${skin.num}`
        );

        expect(img).toHaveAttribute(
          'src',
          `${process.env.NEXT_PUBLIC_DDRAGON_LEAGUEOFLEGENDS}cdn/img/champion/tiles/${defaultProps.id}_${skin.num}.jpg`
        );
      });
    });
  });

  describe('onClick', () => {
    it('should called', () => {
      const { container } = setup();

      defaultProps.skins.map(skin => {
        const wrapper = container.querySelector(
          `#wrapper_${defaultProps.id}_${skin.num}`
        );
        const setState = jest.fn();

        const useStateSpy = jest.spyOn(React, 'useState');

        (useStateSpy as jest.Mock).mockImplementation(init => [init, setState]);

        act(() => {
          fireEvent.click(wrapper);
        });

        expect(useStateSpy).toBeCalled();
      });
    });
  });
});
