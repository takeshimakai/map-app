import Head from 'next/head'

export default function Layout({ children, loggedIn }) {
  return (
    <div>
      <Head>
        <title>Map App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Map App</h1>
        {loggedIn
          ? <div>
              {/* profile/search/filter */}
            </div>
          : <div>
              {/* sign in/sign up */}
            </div>
        }
      </header>
      <main>{children}</main>
    </div>
  )
}