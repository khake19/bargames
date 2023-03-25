import { render, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Card from './Card'

describe('Card', () => {
  it('renders Card component', async () => {
    const history = createMemoryHistory()
     const { getByText } = render(
    <MemoryRouter history={history}>
        <Card id="1" title="title" thumbnail="thumbnail.jpg" shortDescription="lorem ipsum" />
    </MemoryRouter>
  );

  expect(getByText('View More')).toHaveAttribute('href', '/games/1');
  })
})
