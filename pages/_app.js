import '../styles/reset.css'
import '../styles/global.css'
import StatusContext from '../context/StatusContext'

function MyApp({ Component, pageProps }) {
  return (
    <StatusContext.Provider value={{ isLoggedIn: true }}>
      <Component {...pageProps} />
    </StatusContext.Provider>
  )
}

export default MyApp
