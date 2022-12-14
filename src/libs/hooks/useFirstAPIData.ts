import { useEffect, useState } from 'react'

import { fetchDataType } from '@/types/mainTypes'

export const useFirstAPIData = () => {
  const [fetchData, setFetchData] = useState<fetchDataType | undefined>()

  const fetchPrefectureData = async (): Promise<fetchDataType | undefined> => {
    const url = `https://opendata.resas-portal.go.jp/api/v1/prefectures`
    try {
      const response = await fetch(url, {
        headers: { 'x-api-key': process.env.NEXT_PUBLIC_RESAS_API } as HeadersInit,
      })
      const data: fetchDataType = await response.json()
      return data
    } catch (error) {
      console.log('情報の取得に失敗しました')
    }
  }

  useEffect(() => {
    ;(async () => {
      const res = await fetchPrefectureData()
      setFetchData(res)
    })()
  }, [])

  return { fetchData }
}
