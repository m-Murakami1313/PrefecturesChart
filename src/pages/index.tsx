import Head from 'next/head'

import { Header } from '@/components/templates/Header/Header'
import { Main } from '@/components/templates/Main/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>都道府県別の総人口推移グラフ</title>
        <link rel='icon' href='/favicon-16x16.png' />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
    </div>
  )
}
