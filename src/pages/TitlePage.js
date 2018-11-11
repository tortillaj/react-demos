import React from 'react'

import { fetchTitle } from 'store/api'
import { createFetcher } from 'store/cache'
import { Title } from 'components'

const TitleResource = createFetcher((titleId) => fetchTitle(titleId).then(res => res.data))

const TitlePage = ({ titleId }) => {
  const title = TitleResource.read(titleId)
  return <Title title={title} />
}

export default TitlePage
