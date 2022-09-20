import { renderHook, act } from '@testing-library/react'
import React from 'react'

import { useFetchAPIData } from './useFetchAPIData'

describe('useFetchAPIData', () => {
  test('fetchが成功した際にデータが変更されるか', async () => {
    const { result } = renderHook(() => useFetchAPIData())
    const mock = { result: { data: { value: 1, year: 1990 } } }
    ;(fetch as any) = jest.fn(() =>
      Promise.resolve({
        json() {
          return mock
        },
      }),
    )
    const event = {
      target: { id: '0', value: 'tokyo' },
    } as React.ChangeEvent<HTMLInputElement>

    await act(async () => {
      const fetchData = await result.current.fetchPrectureData(event)
      {
        fetchData && expect(fetchData.result.data.value).toBe(1)
        fetchData && expect(fetchData.result.data.year).toBe(1990)
      }
    })
  }),
    test('checkedPrefecturesに同一のデータが無かった場合、handleCheckDataを使用しデータは追加されるか', async () => {
      const { result } = renderHook(() => useFetchAPIData())
      const mock = { result: { data: { value: 1, year: 1990 } } }
      const fetchData = ((fetch as any) = jest.fn(() =>
        Promise.resolve({
          json() {
            return mock
          },
        }),
      ))
      const event = {
        target: { id: '0', value: 'tokyo' },
      } as React.ChangeEvent<HTMLInputElement>

      await act(async () => {
        await fetchData()
        await result.current.handleCheckData(event)
      })
      const checkedPrefecturesData = result.current.checkedPrefectures
      expect(checkedPrefecturesData[0].prefCode).toBe('0')
      expect(checkedPrefecturesData[0].prefName).toBe('tokyo')
      expect(checkedPrefecturesData[0].prefData?.value).toBe(1)
      expect(checkedPrefecturesData[0].prefData?.year).toBe(1990)
    }),
    test('checkedPrefecturesに同一のデータが有った場合、handleCheckDataを使用しデータは削除されるか', async () => {
      const { result } = renderHook(() => useFetchAPIData())
      const mock = { result: { data: { value: 1, year: 1990 } } }
      const fetchData = ((fetch as any) = jest.fn(() =>
        Promise.resolve({
          json() {
            return mock
          },
        }),
      ))
      const event = {
        target: { id: '0', value: 'tokyo' },
      } as React.ChangeEvent<HTMLInputElement>
      const checkedPrefecturesData = result.current.checkedPrefectures

      await act(async () => {
        await fetchData()
        await result.current.handleCheckData(event)
      })

      await act(async () => {
        await fetchData()
        await result.current.handleCheckData(event)
      })
      expect(checkedPrefecturesData).toEqual([])
    })
})
