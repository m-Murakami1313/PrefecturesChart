import React from 'react'

import { PrefecturesWithCheckBox } from 'src/components/organisms/PrefecturesWithCheckBox/PrefecturesWithCheckBox'
import { useRESASAPIData } from 'src/hooks/useRESASAPIData'

export const Main = () => {
  const { fetchData, handleCheckData, checkedPrefectures } = useRESASAPIData()

  return (
    <section>
      <PrefecturesWithCheckBox
        prefecturesData={fetchData}
        handleCheckData={handleCheckData}
        checkedPrefectures={checkedPrefectures}
      />
    </section>
  )
}
