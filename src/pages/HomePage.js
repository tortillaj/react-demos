import React from 'react'

import { fetchTopTitles } from 'store/api'
import { createFetcher } from 'store/cache'
import { TitleList } from 'components'

const TitleListResource = createFetcher(() => fetchTopTitles().then(res => res))

const HomePage = () => {
  const titles = TitleListResource.read()
  return <TitleList titles={titles} />
}

export default HomePage
