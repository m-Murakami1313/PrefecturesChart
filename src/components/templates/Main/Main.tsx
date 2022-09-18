import React from 'react'

import { PrefecturesWithCheckBox } from 'src/components/organisms/PrefecturesWithCheckBox/PrefecturesWithCheckBox'
import { useFetchAPIDATA } from 'src/hooks/useFetchAPIDATA'
import { useRESASAPIData } from 'src/hooks/useFirstAPIData'

export const Main = () => {
  const { fetchData } = useRESASAPIData()
  const { handleCheckData, checkedPrefectures } = useFetchAPIDATA()

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
