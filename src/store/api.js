import axios from 'axios'

const service = axios.create({
  headers: {
    'ws-api': '2.1',
  },
  baseURL: 'https://hoopla-ws.hoopladigital.com',
})

export const searchTitles = searchTerm => service.get(`/v2/search/ALL`, { params: { q: searchTerm } })

export const fetchTopTitles = () => axios.all([
  service.get('/kinds/6/titles/featured?offset=0&limit=12'),
  service.get('/kinds/7/titles/featured?offset=0&limit=12'),
  service.get('/kinds/8/titles/featured?offset=0&limit=12'),
  service.get('/kinds/9/titles/featured?offset=0&limit=12'),
  service.get('/kinds/10/titles/featured?offset=0&limit=12'),
]).then(axios.spread((music, movies, audiobooks, tv, comics) => {
  const titles = music.data.concat(movies.data).concat(audiobooks.data).concat(tv.data).concat(comics.data)
  const sorted = titles.slice().sort((a, b) => {
    if (a.title > b.title) return 1
    if (b.title > a.title) return -1
    return 0
  })
  return sorted
}))

export const fetchTitle = titleId => service.get(`/titles/${titleId}`)
