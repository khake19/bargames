import React from 'react';
import { render } from '@testing-library/react';
import { useRouteError } from 'react-router-dom';
import Error from './Error';

jest.mock('react-router-dom', () => ({
  useRouteError: jest.fn(),
}));

describe('Error component', () => {
  beforeEach(() => {
    useRouteError.mockReset();
  });

  it('renders an error message', () => {
    const error = { statusText: 'Not Found', message: '' };
    useRouteError.mockReturnValueOnce(error);

    const { getByText } = render(<Error />);

    expect(getByText('Oops!')).toBeInTheDocument();
    expect(getByText('Sorry, an unexpected error has occurred.')).toBeInTheDocument();
    expect(getByText('Not Found')).toBeInTheDocument();
  });
  it('renders an error message with a custom message', () => {
    const error = { statusText: '', message: 'Something went wrong' };
    useRouteError.mockReturnValueOnce(error);

    const { getByText } = render(<Error />);

    expect(getByText('Oops!')).toBeInTheDocument();
    expect(getByText('Sorry, an unexpected error has occurred.')).toBeInTheDocument();
    expect(getByText('Something went wrong')).toBeInTheDocument();
  });
});
