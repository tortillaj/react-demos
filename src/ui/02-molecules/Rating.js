import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StarEmpty, StarFilled } from 'ui'

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
`
RatingWrapper.displayName = 'RatingWrapper'

export const Rating = ({ score, onClick, color, hoverColor }) => {
  const rounded = Math.round(score)
  const stars = []

  for (let i = 0; i < rounded; i++) {
    stars.push(<StarFilled key={stars.length} color={color} hoverColor={hoverColor} />)
  }

  while (stars.length < 5) {
    stars.push(<StarEmpty key={stars.length} color={color} hoverColor={hoverColor} />)
  }

  return (
    <RatingWrapper onClick={onClick && onClick}>
      {stars}
    </RatingWrapper>
  )
}

Rating.propTypes = {
  score: PropTypes.number.isRequired,
  onClick: PropTypes.func,
}
