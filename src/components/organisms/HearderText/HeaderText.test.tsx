import { HeaderText } from './HeaderText'
import { render } from '@testing-library/react'

describe('HeaderText', () => {
  test('ヘッダーのテキストが表示される', () => {
    const { getByText } = render(<HeaderText />)
    expect(getByText('都道府県別の総人口推移グラフ')).toBeTruthy()
  })
})
