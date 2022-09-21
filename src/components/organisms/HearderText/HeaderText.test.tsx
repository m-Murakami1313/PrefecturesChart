import { render, screen } from '@testing-library/react'
import { HeaderText } from './HeaderText'

describe('HeaderText', () => {
  test('ヘッダーのテキストが表示される', () => {
    render(<HeaderText />)
    const heading = screen.getByRole('heading')
    const text = screen.getByText('都道府県別の総人口推移グラフ')
    expect(heading).toBeTruthy()
    expect(text).toBeTruthy()
  })
})
