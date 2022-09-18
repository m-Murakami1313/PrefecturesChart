import { useEffect, useState } from 'react'

import { checkedPrefecturesTypes, fetchDataType } from 'src/types/mainTypes'

export const useRESASAPIData = () => {
  const [fetchData, setFetchData] = useState<fetchDataType>({
    result: [{ prefCode: '', prefName: '' }],
  })
  const [checkedPrefectures, setCheckedPrefectures] = useState<checkedPrefecturesTypes[]>([])

  const handleCheckData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = [...checkedPrefectures]
    if (newData.some((data) => data.prefCode === e.target.id)) {
      const deleteData = newData.filter((data) => data.prefCode !== e.target.id)
      setCheckedPrefectures(deleteData)
    } else {
      setCheckedPrefectures([...newData, { prefName: e.target.value, prefCode: e.target.id }])
    }
  }

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

  return { fetchData, handleCheckData, checkedPrefectures }
}
