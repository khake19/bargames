import React from 'react';
import { render, renderHook, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { MemoryRouter } from 'react-router-dom'

import Games from './Games';
import useFiltersStore  from '../../stores/filters'

const MOCK_GAMES = [
  {
      "id": 548,
      "title": "Dead Cide Club",
      "thumbnail": "/g/548/thumbnail.jpg",
      "shortDescription": "A free-to-play, side-scrolling shooter with a variety of modes and character types to choose from.",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "PressA",
      "developer": "PressZ",
      "releaseDate": "2023-02-28"
  },
  {
      "id": 23,
      "title": "Apex Legends",
      "thumbnail": "/g/23/thumbnail.jpg",
      "shortDescription": "A free-to-play strategic battle royale game featuring 60-player matches and team-based play.",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "Electronic Arts",
      "developer": "Electronic Arts",
      "releaseDate": "2019-02-04"
  }
];

jest.mock('../../api/fetcher.js', () => {
  return {
    useFetch: jest.fn(() => ({data: MOCK_GAMES}))
  }
})

describe('Games', () => {
  it('should display the titles and short descriptions', async () => {
    const history = createMemoryHistory()
    render(<MemoryRouter history={history}><Games /></MemoryRouter>)

    expect(screen.getByText("Dead Cide Club")).toBeInTheDocument()
    expect(screen.getByText("A free-to-play, side-scrolling shooter with a variety of modes and character types to choose from.")).toBeInTheDocument()

    expect(screen.getByText("Apex Legends")).toBeInTheDocument()
    expect(screen.getByText("A free-to-play strategic battle royale game featuring 60-player matches and team-based play.")).toBeInTheDocument()
  });
  
  it('should display the game you search', async () => {
    const history = createMemoryHistory()
    render(<MemoryRouter history={history}><Games /></MemoryRouter>)

    const { result } = renderHook(() => useFiltersStore());
    const inputElement = screen.getByPlaceholderText('Search by Name...');
    fireEvent.change(inputElement, { target: { value: 'apex' } });

    expect(screen.getByText("Apex Legends")).toBeInTheDocument()
    expect(screen.getByText("A free-to-play strategic battle royale game featuring 60-player matches and team-based play.")).toBeInTheDocument()

    expect(screen.queryByText("Dead Cide Club")).not.toBeInTheDocument()
    expect(screen.queryByText("A free-to-play, side-scrolling shooter with a variety of modes and character types to choose from.")).not.toBeInTheDocument()

  });
});
