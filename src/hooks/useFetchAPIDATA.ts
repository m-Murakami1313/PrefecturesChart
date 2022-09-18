import { useState } from 'react'

import { checkedPrefecturesTypes } from 'src/types/mainTypes'

export const useFetchAPIDATA = () => {
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

  return {handleCheckData,checkedPrefectures}
}
