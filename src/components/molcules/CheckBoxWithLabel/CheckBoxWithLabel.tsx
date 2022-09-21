import React from 'react'

import { checkedPrefecturesTypes } from 'src/types/mainTypes'

interface PropsTypes {
  data: checkedPrefecturesTypes
  handleCheckData: (e: React.ChangeEvent<HTMLInputElement>) => void
  checkedPrefectures: checkedPrefecturesTypes[]
}

export const CheckBoxWithLabel = ({ data, handleCheckData, checkedPrefectures }: PropsTypes) => {
  return (
    <div>
      <input
        id={data.prefCode}
        type='checkbox'
        onChange={handleCheckData}
        value={data.prefName}
      />
      <label htmlFor={data.prefCode}>{data.prefName}</label>
    </div>
  )
}
