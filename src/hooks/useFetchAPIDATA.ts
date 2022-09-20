import { useState } from 'react'

import { checkedPrefecturesTypes, prefecturesDataTypes } from 'src/types/mainTypes'

export const useFetchAPIData = () => {
  const [checkedPrefectures, setCheckedPrefectures] = useState<checkedPrefecturesTypes[]>([])

  const handleCheckData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = [...checkedPrefectures]
    if (newData.some((data) => data.prefCode === e.target.id)) {
      const deleteData = newData.filter((data) => data.prefCode !== e.target.id)
      setCheckedPrefectures(deleteData)
    } else {
      const fetchData = async () => {
        const data = await fetchPrectureData(e)
        setCheckedPrefectures([
          ...newData,
          { prefName: e.target.value, prefCode: e.target.id, prefData: data?.result.data },
        ])
      }
      fetchData()
    }
  }

  const fetchPrectureData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${e.target.id}`
    try {
      const response = await fetch(url, {
        headers: { 'x-api-key': process.env.NEXT_PUBLIC_RESAS_API } as HeadersInit,
      })
      const data: prefecturesDataTypes = await response.json()
      return data
    } catch (error) {
      console.log('情報の取得に失敗しました')
    }
  }

  return { handleCheckData, checkedPrefectures, fetchPrectureData }
}
