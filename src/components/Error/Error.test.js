import React from 'react';
import { render, screen } from '@testing-library/react';
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

    render(<Error />);

    expect(screen.getByText('Oops!')).toBeInTheDocument();
    expect(screen.getByText('Sorry, an unexpected error has occurred.')).toBeInTheDocument();
    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });
  it('renders an error message with a custom message', () => {
    const error = { statusText: '', message: 'Something went wrong' };
    useRouteError.mockReturnValueOnce(error);

    render(<Error />);

    expect(screen.getByText('Oops!')).toBeInTheDocument();
    expect(screen.getByText('Sorry, an unexpected error has occurred.')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('renders an error message with a params message', () => {
    render(<Error errorMessage="No game found with that id"/>);

    expect(screen.getByText('Oops!')).toBeInTheDocument();
    expect(screen.getByText('Sorry, an unexpected error has occurred.')).toBeInTheDocument();
    expect(screen.getByText('No game found with that id')).toBeInTheDocument();
  });
});
