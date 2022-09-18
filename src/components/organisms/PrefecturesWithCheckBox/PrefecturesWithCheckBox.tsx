import React from 'react'

import { CheckBox } from 'src/components/atom/CheckBox/CheckBox'
import { checkedPrefecturesTypes, fetchDataType } from 'src/types/mainTypes'

interface PropsTypes {
  prefecturesData: fetchDataType
  handleCheckData: (e: React.ChangeEvent<HTMLInputElement>) => void
  checkedPrefectures: checkedPrefecturesTypes[]
}

export const PrefecturesWithCheckBox = ({
  prefecturesData,
  handleCheckData,
  checkedPrefectures,
}: PropsTypes) => {
  return (
    <div>
      {prefecturesData.result.map((data: checkedPrefecturesTypes) => (
        <div key={data.prefName}>
          <input
            id={data.prefCode}
            type='checkbox'
            onChange={handleCheckData}
            checked={checkedPrefectures.some(
              (checked: checkedPrefecturesTypes) => checked.prefCode === data.prefCode.toString(),
            )}
            value={data.prefName}
          />
          <label htmlFor={data.prefCode}>{data.prefName}</label>
        </div>
      ))}
    </div>
  )
}
