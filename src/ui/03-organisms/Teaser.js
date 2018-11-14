import styled from 'styled-components'

import { TeaserHeading } from '../01-atoms'

export const Teaser = styled.figure`
  width: 100%;
  position: relative;
  margin: 0;
  height: 100%;

  ${TeaserHeading} {
    margin-top: 0;
  }
`
Teaser.displayName = 'Teaser'
