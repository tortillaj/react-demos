import styled from 'styled-components'

import { themeValue } from '../theme'
import { Overlay, TeaserHeading } from '../01-atoms'
import { TeaserContent } from '../02-molecules'

export const Teaser = styled.figure`
  width: 100%;
  position: relative;
  margin: 0;
  height: 100%;

  ${TeaserHeading} {
    margin-top: 0;
  }

  ${Overlay} {
    opacity: 0;
    z-index: -1;
    transition: opacity 500ms 0s cubic-bezier(.165, .84, .19, .95);
  }

  ${TeaserContent} {
    display: none;
    opacity: 0;
  }

  @media all and (min-width: ${themeValue('sizes.small')}) {
    &:hover {
      ${TeaserContent} {
        display: flex;
        opacity: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
      }

      ${Overlay} {
        z-index: 2;
        opacity: 1;
      }
    }
  }
`
Teaser.displayName = 'Teaser'
