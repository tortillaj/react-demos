import styled, { css } from 'styled-components'
import { Star as EmptyStar } from 'styled-icons/fa-regular/Star'
import { Star as SolidStar } from 'styled-icons/fa-solid/Star'
// import { Youtube as YoutubeLogo } from 'styled-icons/fa-brands/Youtube'
// import { FacebookF as FacebookLogo } from 'styled-icons/fa-brands/FacebookF'
// import { Twitter as TwitterLogo } from 'styled-icons/fa-brands/Twitter'
// import { Instagram as InstagramLogo } from 'styled-icons/fa-brands/Instagram'
import { Spinner } from 'styled-icons/fa-solid/Spinner'

import { themeValue } from '../theme'

const setFillColor = (color, hoverColor) => css`
  color: ${color ? themeValue(color) : 'currentColor'};

  &:hover {
    color: ${hoverColor ? themeValue(hoverColor) : 'currentColor'};
  }
`

export const StarEmpty = styled(EmptyStar).attrs({
  width: props => (props.size ? props.size : props.theme.typography.body.fontSize),
  height: props => (props.size ? props.size : props.theme.typography.body.fontSize),
})`
  ${props => setFillColor(props.color, props.hoverColor)};
`
StarEmpty.displayName = 'StarEmpty'

export const StarFilled = styled(SolidStar).attrs({
  width: props => (props.size ? props.size : props.theme.typography.body.fontSize),
  height: props => (props.size ? props.size : props.theme.typography.body.fontSize),
})`
  ${props => setFillColor(props.color, props.hoverColor)};
`
StarFilled.displayName = 'StarFilled'

export const LoadingSpinner = styled(Spinner).attrs({
  width: props => (props.size ? props.size : props.theme.typography.body.fontSize),
  height: props => (props.size ? props.size : props.theme.typography.body.fontSize),
})`
  ${props => setFillColor(props.color, props.hoverColor)};

  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}

animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
`
LoadingSpinner.displayName = 'LoadingSpinner'
