import { renderHook } from '@testing-library/react';
import { act } from '@testing-library/react-hooks'

import buildParams  from './buildParams.js'

describe('buildParams utils', () => {
  it('should create a query string', () => {
    const queryParts = buildParams('pc', 'created-date', ['shooter', 'moba'])
    expect(queryParts).toStrictEqual('?platform=pc&sort-by=created-date&category=shooter&category=moba')
  })
  it('should create a query string', () => {
    const queryParts = buildParams('', '', [])
    expect(queryParts).toStrictEqual('')
  })
})
