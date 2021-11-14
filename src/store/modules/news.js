import NewsApi from '../../api/news'

const state = {
  totalResults: 0,
  news: [],
  selectedNews: null
}

const getters = {
  getNews: (state) => {
    return state.news
  },
  getTotalResults: (state) => {
    return state.totalResults
  },
  getSelectedNews: (state) => state.selectedNews
}

// actions
const actions = {
  async fetchHeadlines ({ commit, state }, data) {
    await NewsApi.get('/top-headlines', {
      params: data
    })
    .then(res => {
      commit('setNewsList', res.data.articles)
      commit('setTotalResults', res.data.totalResults)
    })
    .catch(console.log)
  },
  async fethNewsDetail ({commit, state}, details) {
    console.log('test', details)
    commit('setSelectedNews', details)
  }
}

// mutations
const mutations = {
  setSelectedNews (state, details) {
    state.selectedNews = details
  },
  setNewsList (state, articles) {
    state.news = articles
  },
  setTotalResults (state, totalResults) {
    state.totalResults = totalResults
  }
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}