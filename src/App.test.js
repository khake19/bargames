import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Find & Track the best free-to-play games!/i);
  expect(linkElement).toBeInTheDocument();
});
