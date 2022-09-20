import Head from 'next/head'

import { Header } from '@/components/templates/Header/Header'
import { Main } from '@/components/templates/Main/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>

      <footer></footer>
    </div>
  )
}
