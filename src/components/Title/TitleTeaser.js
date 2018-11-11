import React from 'react'
import { navigate } from '@reach/router'

import { InternalLink, Rating, Teaser, TeaserCaption, TeaserContent, TeaserHeading, TeaserImage, Overlay } from 'ui'

export const TitleTeaser = ({ title }) => (
  <Teaser>
    <InternalLink to={`title/${title.titleId}`} block>
      <TeaserImage
        src={`https://d2snwnmzyr8jue.cloudfront.net/${title.artKey}_270.jpeg`}
        alt={`cover art for ${title.title}`}
      />
    </InternalLink>
    <TeaserCaption>
      <TeaserHeading>{title.title}</TeaserHeading>
    </TeaserCaption>
    <TeaserContent onClick={() => navigate(`/title/${title.titleId}`)}>
      <TeaserHeading>{title.title}</TeaserHeading>
      <Rating score={3.75} color="colors.background" hoverColor="colors.primary.base" />
    </TeaserContent>
    <Overlay color="accent" />
  </Teaser>
)
