import React from 'react'

import { PrefecturesWithCheckBox } from 'src/components/organisms/PrefecturesWithCheckBox/PrefecturesWithCheckBox'
import { useFetchAPIDATA } from 'src/hooks/useFetchAPIDATA'
import { useFirstAPIData } from 'src/hooks/useFirstAPIData'

export const Main = () => {
  const { fetchData } = useFirstAPIData()
  const { handleCheckData, checkedPrefectures } = useFetchAPIDATA()

  return (
    <section>
      {fetchData && (
        <PrefecturesWithCheckBox
          prefecturesData={fetchData}
          handleCheckData={handleCheckData}
          checkedPrefectures={checkedPrefectures}
        />
      )}
    </section>
  )
}
