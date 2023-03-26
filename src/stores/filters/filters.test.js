import { renderHook } from '@testing-library/react';
import { act } from '@testing-library/react-hooks'

import useFiltersStore  from './filters'

describe('useFiltersStore' , () => {
  it('should add a platform', () => {
    const { result } = renderHook(() => useFiltersStore());

    act(() => result.current.addPlatform('PC'))
    expect(result.current.platform).toStrictEqual('PC')

  })
  it('should add a sort', () => {
    const { result } = renderHook(() => useFiltersStore());

    act(() => result.current.addSortBy('relevant'))
    expect(result.current.sortBy).toStrictEqual('relevant')
  })
  it('should add a categories', () => {
    const { result } = renderHook(() => useFiltersStore());

    expect(result.current.categories).toStrictEqual([])

    act(() => result.current.addCategory(['id1']))
    expect(result.current.categories).toStrictEqual(['id1'])
  })
  it('should add a search', () => {
    const { result } = renderHook(() => useFiltersStore());

    act(() => result.current.addSearch('lorem'))
    expect(result.current.search).toStrictEqual('lorem')
  })
})
