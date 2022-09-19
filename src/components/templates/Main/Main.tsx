import React from 'react'

import { PrefecturesWithCheckBox } from 'src/components/organisms/PrefecturesWithCheckBox/PrefecturesWithCheckBox'
import { useFetchAPIData } from 'src/hooks/useFetchAPIData'
import { useFirstAPIData } from 'src/hooks/useFirstAPIData'

export const Main = () => {
  const { fetchData } = useFirstAPIData()
  const { handleCheckData, checkedPrefectures } = useFetchAPIData()

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
