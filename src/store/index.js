import { createStore } from 'vuex'
import variables from './modules/variables'

const store = createStore({
  modules: {
    variables,
  }
})

export default store