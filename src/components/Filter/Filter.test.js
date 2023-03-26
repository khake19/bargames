import React from 'react';
import { act, render, screen, fireEvent, renderHook } from '@testing-library/react';
import Filter from './Filter';
import useFiltersStore from '../../stores/filters';
import selectEvent from 'react-select-event'

const MOCK_GAME_CATEGORIES = [
  "mmorpg",
  "shooter",
  "strategy"
]

jest.mock('../../api/fetcher.js', () => {
  return {
    useFetch: jest.fn(() => ({data: MOCK_GAME_CATEGORIES}))
  }
});

describe('Filter component', () => {

  it('should be able to select a platform', async () => {
    render(<Filter />);
    await act(() => { selectEvent.select(screen.getByLabelText('Filter by Platform'), 'PC') });
    expect(screen.getByRole("form")).toHaveFormValues({platform: 'pc'});

    await act(() => { selectEvent.select(screen.getByLabelText('Filter by Platform'), 'Browser') });
    expect(screen.getByRole("form")).toHaveFormValues({platform: 'browser'});
  });
  it('should be able to sort', async () => {
    render(<Filter />);
    await act(() => { selectEvent.select(screen.getByLabelText('Sort By'), 'Release Date') });
    expect(screen.getByRole("form")).toHaveFormValues({sortBy: 'release-date'});

    await act(() => { selectEvent.select(screen.getByLabelText('Sort By'), 'Alphabetical') });
    expect(screen.getByRole("form")).toHaveFormValues({sortBy: 'alphabetical'});

    await act(() => { selectEvent.select(screen.getByLabelText('Sort By'), 'Relevance') });
    expect(screen.getByRole("form")).toHaveFormValues({sortBy: 'relevance'});
  });
  it('should be able to select multiple categories', async () => {
    render(<Filter />);
    await act(() => { selectEvent.select(screen.getByLabelText('Filter by Category'), 'mmorpg') });
    expect(screen.getByRole("form")).toHaveFormValues({categories: 'mmorpg'});

    await act(() => { selectEvent.select(screen.getByLabelText('Filter by Category'), 'shooter') });
    expect(screen.getByRole("form")).toHaveFormValues({categories: ['mmorpg', 'shooter']});

    await act(() => { selectEvent.select(screen.getByLabelText('Filter by Category'), 'strategy') });
    expect(screen.getByRole("form")).toHaveFormValues({categories: ['mmorpg', 'shooter', 'strategy']});
  });
});
