import React from 'react'

import { CheckBoxWithLabel } from 'src/components/molcules/CheckBoxWithLabel/CheckBoxWithLabel'
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
    <article>
      {prefecturesData.result.map((data: checkedPrefecturesTypes) => (
        <div key={data.prefName}>
          <CheckBoxWithLabel
            data={data}
            handleCheckData={handleCheckData}
            checkedPrefectures={checkedPrefectures}
          />
        </div>
      ))}
    </article>
  )
}
