import { render } from '@testing-library/react'
import { HeaderText } from './HeaderText'

describe('HeaderText', () => {
  test('ヘッダーのテキストが表示される', () => {
    const { getByText } = render(<HeaderText />)
    expect(getByText('都道府県別の総人口推移グラフ')).toBeTruthy()
  })
})
