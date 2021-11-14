
   
import { createStore, createLogger } from 'vuex'
import news from './modules/news'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    news
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})