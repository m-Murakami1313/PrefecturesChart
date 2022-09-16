import Head from 'next/head'

import { Header } from 'src/components/templates/Header/Header'

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
      <main></main>

      <footer></footer>
    </div>
  )
}
