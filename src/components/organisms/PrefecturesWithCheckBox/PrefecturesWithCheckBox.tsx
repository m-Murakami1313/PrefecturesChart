import React from 'react'

import { CheckBoxWithLabel } from '../../molcules/CheckBoxWithLabel/CheckBoxWithLabel'
import { checkedPrefecturesTypes, fetchDataType } from '../../../types/mainTypes'
import styles from './PrefecturesWithCheckBox.module.scss'

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
