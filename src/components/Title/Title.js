import React from 'react'

import { H1 } from 'ui'

export const Title = ({ title }) => (
  <React.Fragment>
    <H1>{title.title}</H1>
    <img src={`https://d2snwnmzyr8jue.cloudfront.net/${title.artKey}_270.jpeg`} alt={`cover art for ${title.title}`} />
  </React.Fragment>
)
