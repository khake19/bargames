import React from 'react';
import { render, screen } from '@testing-library/react';
import GameDetails from './GameDetails';
import { createMemoryHistory } from 'history'
import { MemoryRouter } from 'react-router-dom'

const MOCK_GAME_CATEGORIES = {
    "id": 548,
    "title": "Dead Cide Club",
    "thumbnail": "/g/548/thumbnail.jpg",
    "status": "Live",
    "shortDescription": "A free-to-play, side-scrolling shooter with a variety of modes and character types to choose from.",
    "description": "Dead Cide Club is a multiplayer side-scrolling shooter in which players take on monsters using unique weapons and earn rewards in the form of coins. The coins can use used to purchase even better weapons and other useful supplies. To make the game more exciting, it features 2.5-dimensional battle areas and grappling hooks. This will allow players a bit more freedom in movement and speed up combat.\r\n\r\nThe game boasts seven cartels: gangsters, nerds, prisoners, agents, psychopaths, hipsters, and soldiers. Each has its own traits, stories, weapons, and perks. Players choose one of these to be part of and take advantage of their benefits in a variety of game modes.\r\n\r\nFight til the last man standing in battle royale. Fight increasingly stronger waves of creatures in the three-player co-op horde mode. Fight against other teams in the 5v5 co-op Domination mode.",
    "genre": "Shooter",
    "platform": "Windows",
    "publisher": "PressA",
    "developer": "PressZ",
    "releaseDate": "2023-02-28",
    "minimumSystemRequirements": {
        "os": "64-bit Windows 7, Windows 10, Windows 11",
        "processor": "Intel Core i5-4430 / AMD FX-6300",
        "memory": " 8 GB RAM",
        "graphics": " NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB",
        "storage": "20 GB available space"
    },
    "screenshots": [
        {
            "id": 1355,
            "image": "/g/548/dead-cide-club-1.jpg"
        },
        {
            "id": 1356,
            "image": "/g/548/dead-cide-club-2.jpg"
        },
        {
            "id": 1357,
            "image": "/g/548/dead-cide-club-3.jpg"
        }
    ]
}

jest.mock('../../api/fetcher.js', () => {
  return {
    useFetch: jest.fn(() => ({data: MOCK_GAME_CATEGORIES}))
  }
});

describe('GameDetails', () => {

  it('should be able to select a platform', async () => {
    const history = createMemoryHistory()
    render(<MemoryRouter history={history}><GameDetails /></MemoryRouter>)

    expect(screen.getByText(MOCK_GAME_CATEGORIES["title"])).toBeInTheDocument()
  });
});
