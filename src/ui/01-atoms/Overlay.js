import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { hexToRGB } from '../theme'

export const Overlay = styled.div`
  background-color: ${props => props.theme.colors[props.color].base};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  ${props => props.onClick && css`cursor: pointer`};
`

Overlay.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'accent', 'background']),
}

Overlay.displayName = 'Overlay'

export const TransparentOverlay = styled(Overlay)`
  background-color: ${props => hexToRGB(props.theme.colors[props.color].base, 0.8)};
`

TransparentOverlay.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'accent', 'background']),
}

TransparentOverlay.displayName = 'TransparentOverlay'
