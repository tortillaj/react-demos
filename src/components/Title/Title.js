import React from 'react'

import { H1, Inset, P } from 'ui'

export const Title = ({ title }) => (
  <Inset>
    <H1>{title.title}</H1>
    <img src={`https://d2snwnmzyr8jue.cloudfront.net/${title.artKey}_270.jpeg`} alt={`cover art for ${title.title}`} />
    <P>{title.synopsis}</P>
  </Inset>
)
