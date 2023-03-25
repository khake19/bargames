import { renderHook, act } from '@testing-library/react-hooks'

import useFiltersStore  from './filters'

test('useFiltersStore', () => {
  const { result } = renderHook(() => useFiltersStore());

  expect(result.current.categories).toStrictEqual([])

  act(() => result.current.addPlatform('PC'))
  expect(result.current.platform).toStrictEqual('PC')

  act(() => result.current.addSortBy('relevant'))
  expect(result.current.sortBy).toStrictEqual('relevant')

  act(() => result.current.addCategory(['id1']))
  expect(result.current.categories).toStrictEqual(['id1'])

  act(() => result.current.addSearch('lorem'))
  expect(result.current.search).toStrictEqual('lorem')
})
