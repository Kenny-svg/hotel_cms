import '@/styles/globals.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const App = ({ Component, pageProps }: AppProps) => {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )

   
}
export default App;
