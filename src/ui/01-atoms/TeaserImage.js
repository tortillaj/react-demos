import React from 'react'
import styled from 'styled-components'

import { themeValue } from '../theme'

const TeaserImageWrapper = styled.div`
  height: calc(${themeValue('layout.spacing.large')} * 8);
  width: 100%;
  background-color: ${themeValue('colors.secondary.pale')};
  overflow: hidden;
  position: relative;

  @media all and (min-width: ${themeValue('sizes.medium')}) {
    height: calc(${themeValue('layout.spacing.large')} * 10);
  }
`
TeaserImageWrapper.displayName = 'TeaserImageWrapper'

const TeaserImageElement = styled.img`
  display: block;
  object-fit: contain;
  object-position: center;
  width: 100%;
  height: 100%;
  position: relative;
`
TeaserImageElement.displayName = 'TeaserImageElement'

const TeaserBackground = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(2.0);
  filter: blur(20px) grayscale(0.25);
`

export const TeaserImage = props => (
  <TeaserImageWrapper>
    <TeaserBackground {...props} />
    <TeaserImageElement {...props} />
  </TeaserImageWrapper>
)
