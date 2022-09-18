import { CheckBoxWithLabel } from './CheckBoxWithLabel'
import { render } from '@testing-library/react'

describe('CheckBox', () => {
  const dummyData = { prefCode: '1', prefName: 'Tokyo' }
  const dummyCheckedPrefectures = [{ prefCode: '1', prefName: 'Tokyo' }]
  const jestHandleCheckData = jest.fn()

  test('CheckBoxのラベルに文字が表示されているか', () => {
    const { getByText } = render(
      <CheckBoxWithLabel
        data={dummyData}
        checkedPrefectures={dummyCheckedPrefectures}
        handleCheckData={jestHandleCheckData}
      />,
    )
    expect(getByText('Tokyo')).toBeTruthy()
  })
})
