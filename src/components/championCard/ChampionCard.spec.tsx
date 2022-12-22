import '@testing-library/jest-dom';
import { act, fireEvent, render } from '@testing-library/react';
import { useRouter } from 'next/router';

import { ChampionCardProps, ChampionCard } from './ChampionCard';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

const defaultProps: ChampionCardProps = {
  id: 'Champion',
  name: 'Champion',
  title: 'The Best Champion',
};

const setup = (props?: Partial<ChampionCardProps>) => {
  const championCardProps = { ...props };

  return render(<ChampionCard {...defaultProps} {...championCardProps} />);
};

describe('<ChampionCard />', () => {
  describe('check render', () => {
    it('should render name', () => {
      const { getByText } = setup();
      expect(getByText(defaultProps.name)).toBeInTheDocument();
    });

    it('should render title', () => {
      const { getByText } = setup();
      expect(getByText(defaultProps.title)).toBeInTheDocument();
    });

    it('should render attribute id', () => {
      const { container } = setup();
      expect(
        container.querySelector('#champion_card_' + defaultProps.id)
      ).toBeInTheDocument();
    });

    it('should render img', () => {
      const { getByRole } = setup();
      expect(getByRole('img')).toHaveAttribute(
        'src',
        `${process.env.NEXT_PUBLIC_DDRAGON_LEAGUEOFLEGENDS}cdn/img/champion/tiles/${defaultProps.id}_0.jpg`
      );
    });
  });

  describe('onClick', () => {
    it('should called', () => {
      const mockRouter = {
        push: jest.fn(),
      };
      (useRouter as jest.Mock).mockReturnValue(mockRouter);
      const { getByText } = setup();

      act(() => {
        fireEvent.click(getByText(defaultProps.name));
      });

      expect(mockRouter.push).toHaveBeenCalled();
    });

    it('should called with corretly route', () => {
      const mockRouter = {
        push: jest.fn(),
      };
      (useRouter as jest.Mock).mockReturnValue(mockRouter);
      const { getByText } = setup();

      act(() => {
        fireEvent.click(getByText(defaultProps.name));
      });

      expect(mockRouter.push).toBeCalledWith('/champions/' + defaultProps.id);
    });
  });
});
