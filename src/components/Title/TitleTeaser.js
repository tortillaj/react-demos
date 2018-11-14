import React, { useState } from 'react'
import { navigate } from '@reach/router'
import posed, { PoseGroup } from 'react-pose'
// import { tween, easing } from 'popmotion'

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
      <TitleTeaserHover title={title} isHovering={isHovering} />
    </Teaser>
  )
}

const PosedOverlay = posed(Overlay)({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
})

const PosedTeaserContent = posed(TeaserContent)({
  enter: {
    opacity: 1,
    // height: 'auto',
  },
  exit: {
    opacity: 0,
    // height: 0,
  },
})

const TitleTeaserHover = ({ title, isHovering }) => (
  <PoseGroup>
    {isHovering && [
      <PosedOverlay color="accent" key="overlay" />,
      <PosedTeaserContent onClick={() => navigate(`/title/${title.titleId}`)} key="content">
        <header>
          <TeaserHeading>{title.title}</TeaserHeading>
        </header>
        <section>
          <P>{title.kind}</P>
          <Rating score={3.75} color="colors.background" hoverColor="colors.primary.highlight" />
        </section>
      </PosedTeaserContent>,
    ]}
  </PoseGroup>
)
