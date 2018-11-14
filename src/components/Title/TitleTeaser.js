import React, { useState } from 'react'
import { navigate } from '@reach/router'

import { InternalLink, Rating, Teaser, TeaserCaption, TeaserContent, TeaserHeading, TeaserImage, Overlay, P } from 'ui'

export const TitleTeaser = ({ title }) => {
  const [isHovering, setHover] = useState(false)

  return (
    <Teaser onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <InternalLink to={`title/${title.titleId}`} block="true">
        <TeaserImage
          src={`https://d2snwnmzyr8jue.cloudfront.net/${title.artKey}_270.jpeg`}
          alt={`cover art for ${title.title}`}
        />
      </InternalLink>
      <TeaserCaption>
        <TeaserHeading>{title.title}</TeaserHeading>
      </TeaserCaption>
      {isHovering && <TitleTeaserHover title={title} />}
    </Teaser>
  )
}

const TitleTeaserHover = ({ title }) => (
  <React.Fragment>
    <Overlay color="accent" /><Overlay color="accent" />
    <TeaserContent onClick={() => navigate(`/title/${title.titleId}`)}>
      <TeaserHeading>{title.title}</TeaserHeading>
      <P>{title.kind}</P>
      <Rating score={3.75} color="colors.background" hoverColor="colors.primary.highlight" />
    </TeaserContent>
  </React.Fragment>
)
