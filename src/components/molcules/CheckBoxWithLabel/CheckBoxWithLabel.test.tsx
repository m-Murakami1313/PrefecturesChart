import { render, screen } from '@testing-library/react'
import { CheckBoxWithLabel } from './CheckBoxWithLabel'

describe('CheckBox', () => {
  const dummyData = { prefCode: '1', prefName: 'Tokyo' }
  const dummyCheckedPrefectures = [{ prefCode: '1', prefName: 'Tokyo' }]
  const jestHandleCheckData = jest.fn()

  test('CheckBoxのラベルに文字が表示されているか', () => {
    render(
      <CheckBoxWithLabel
        data={dummyData}
        checkedPrefectures={dummyCheckedPrefectures}
        handleCheckData={jestHandleCheckData}
      />,
    )
    const text = screen.getByLabelText('Tokyo')
    expect(text).toBeTruthy()
  })
})
