import { useEffect, useState } from 'react'

import { fetchDataType } from 'src/types/mainTypes'

export const useRESASAPIData = () => {
  const [fetchData, setFetchData] = useState<fetchDataType>({
    result: [{ prefCode: '', prefName: '' }],
  })

  const fetchPrefectureData = async () => {
    const url = `https://opendata.resas-portal.go.jp/api/v1/prefectures`
    try {
      const response = await fetch(url, {
        headers: { 'x-api-key': process.env.NEXT_PUBLIC_RESAS_API } as HeadersInit,
      })
      const data: fetchDataType = await response.json()
      setFetchData(data)
    } catch (error) {
      console.log('情報の取得に失敗しました')
    }
  }

  useEffect(() => {
    fetchPrefectureData()
  }, [])

  return { fetchData }
}
