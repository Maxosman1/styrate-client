import PageFormat from 'components/Common/PageFormat/PageFormat'
import Create from 'components/Pages/Create/Create'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Styrate | Create</title>
        <meta name="description" content="[Insert Descritption]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageFormat>
        <Create/>
      </PageFormat>
    </>
  )
}
