import React from 'react'

import { PrefecturesWithCheckBox } from '@/components/organisms/PrefecturesWithCheckBox/PrefecturesWithCheckBox'
import { useFetchAPIData } from '@/hooks/useFetchAPIData'
import { useFirstAPIData } from '@/hooks/useFirstAPIData'

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
