import React from 'react';
import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import Search from './Search';
import useFiltersStore from '../../stores/filters';


describe('Search component', () => {

  it('should render the input element with the correct attributes', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText('Search by Name...');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

   it('should update the search state when the input value changes', () => {
    render(<Search />);
    const { result } = renderHook(() => useFiltersStore());
    const inputElement = screen.getByPlaceholderText('Search by Name...');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(result.current.search).toStrictEqual('test');
  });
});
