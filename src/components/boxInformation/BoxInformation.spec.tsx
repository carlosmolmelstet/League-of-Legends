import { Box } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { BoxInformationProps, BoxInformation } from './BoxInformation';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

const defaultProps: BoxInformationProps = {
  title: 'Title',
  children: <Box id="children">children</Box>,
};

const setup = (props?: Partial<BoxInformationProps>) => {
  const BoxInformationProps = { ...props };

  return render(<BoxInformation {...defaultProps} {...BoxInformationProps} />);
};

describe('<BoxInformation />', () => {
  describe('check render', () => {
    it('should render title', () => {
      const { getByText } = setup();
      expect(getByText(defaultProps.title)).toBeInTheDocument();
    });
  });
});
