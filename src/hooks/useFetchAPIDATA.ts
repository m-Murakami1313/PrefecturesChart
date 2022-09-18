import { useState } from 'react'

import { checkedPrefecturesTypes, prefecturesDataTypes } from 'src/types/mainTypes'

export const useFetchAPIDATA = () => {
  const [checkedPrefectures, setCheckedPrefectures] = useState<checkedPrefecturesTypes[]>([])

  const handleCheckData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = [...checkedPrefectures]
    if (newData.some((data) => data.prefCode === e.target.id)) {
      const deleteData = newData.filter((data) => data.prefCode !== e.target.id)
      setCheckedPrefectures(deleteData)
    } else {
      fetchPrectureData(e, newData)
    }
  }

  const fetchPrectureData = async (
    e: React.ChangeEvent<HTMLInputElement>,
    newData: checkedPrefecturesTypes[],
  ) => {
    const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${e.target.id}`
    try {
      const response = await fetch(url, {
        headers: { 'x-api-key': process.env.NEXT_PUBLIC_RESAS_API } as HeadersInit,
      })
      const data: prefecturesDataTypes = await response.json()
      setCheckedPrefectures([
        ...newData,
        { prefName: e.target.value, prefCode: e.target.id, prefData: data.result.data },
      ])
    } catch (error) {
      console.log('情報の取得に失敗しました')
    }
  }

  return { handleCheckData, checkedPrefectures }
}
