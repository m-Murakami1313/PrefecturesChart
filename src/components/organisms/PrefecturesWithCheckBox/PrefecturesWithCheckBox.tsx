import React from 'react'

import styles from './PrefecturesWithCheckBox.module.scss'
import { CheckBoxWithLabel } from '@/components/molcules/CheckBoxWithLabel/CheckBoxWithLabel'
import { checkedPrefecturesTypes, fetchDataType } from '@/types/mainTypes'

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
    <article className={styles.container}>
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
