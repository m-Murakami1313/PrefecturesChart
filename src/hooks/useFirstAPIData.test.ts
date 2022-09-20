import { renderHook, act } from '@testing-library/react'
import { fetchDataType } from '@/types/mainTypes'

import { useFirstAPIData } from './useFirstAPIData'

describe('useFirstAPIData', () => {
  const { result } = renderHook(() => useFirstAPIData())

  test('fetchが成功したとき、期待した値を返却する', async () => {
    const mock: fetchDataType = {
      result: [{ prefCode: '0', prefName: 'tokyo' }],
    }

    ;(fetch as any) = jest.fn(() =>
      Promise.resolve({
        json() {
          return mock
        },
      }),
    )
    await act(async () => {
      const data = await result.current.fetchData
      {
        data && expect(data.result[0].prefCode).toBe('0')
        data && expect(data.result[0].prefName).toBe('tokyo')
      }
    })
  })
})
