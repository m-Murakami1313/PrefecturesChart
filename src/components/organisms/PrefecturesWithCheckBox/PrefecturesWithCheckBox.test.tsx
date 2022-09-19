import { render, screen, fireEvent } from '@testing-library/react'
import { checkedPrefecturesTypes, fetchDataType } from 'src/types/mainTypes'
import { PrefecturesWithCheckBox } from './PrefecturesWithCheckBox'

describe('PrefecturesWithCheckBox', () => {
  const fakeData: fetchDataType = {
    result: [
      { prefCode: '0', prefName: '東京' },
      { prefCode: '1', prefName: '大阪' },
      { prefCode: '2', prefName: '京都' },
    ],
  }

  const checkFakeData: checkedPrefecturesTypes[] = [
    { prefCode: '0', prefName: '東京' },
    { prefCode: '1', prefName: '大阪' },
    { prefCode: '2', prefName: '京都' },
  ]

  test('checkboxにラベルが付けられている', () => {
    render(
      <PrefecturesWithCheckBox
        prefecturesData={fakeData}
        handleCheckData={jest.fn()}
        checkedPrefectures={checkFakeData}
      />,
    )
    const checkbox = screen.getByText('東京')
    expect(checkbox).toBeInTheDocument()
  })
  test('checkboxが複数表示されている', () => {
    render(
      <PrefecturesWithCheckBox
        prefecturesData={fakeData}
        handleCheckData={jest.fn()}
        checkedPrefectures={checkFakeData}
      />,
    )
    const checkbox = screen.getAllByRole('checkbox')
    expect(checkbox).toHaveLength(3)
  })
})
