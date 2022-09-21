import React from 'react'
import styles from './Main.module.scss'

import { Charts } from '@/components/organisms/Charts/Charts'
import { PrefecturesWithCheckBox } from '@/components/organisms/PrefecturesWithCheckBox/PrefecturesWithCheckBox'
import { useFetchAPIData } from 'src/libs/hooks/useFetchAPIData'
import { useFirstAPIData } from 'src/libs/hooks/useFirstAPIData'

export const Main = () => {
  const { fetchData } = useFirstAPIData()
  const { handleCheckData, checkedPrefectures } = useFetchAPIData()

  return (
    <div>
      <section>
        {fetchData && (
          <PrefecturesWithCheckBox
            prefecturesData={fetchData}
            handleCheckData={handleCheckData}
            checkedPrefectures={checkedPrefectures}
          />
        )}
      </section>

      <section className={styles.charts}>
        {checkedPrefectures[0] !== undefined && <Charts checkedPrefectures={checkedPrefectures} />}
      </section>
    </div>
  )
}
