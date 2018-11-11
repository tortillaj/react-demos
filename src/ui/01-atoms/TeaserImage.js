import React from 'react'
import styled from 'styled-components'

import { themeValue } from '../theme'

const TeaserImageWrapper = styled.div`
  height: calc(${themeValue('layout.spacing.large')} * 10);
  width: 100%;
  background-color: ${themeValue('colors.secondary.pale')};

  @media all and (min-width: ${themeValue('sizes.medium')}) {
    height: calc(${themeValue('layout.spacing.large')} * 14);
  }
`
TeaserImageWrapper.displayName = 'TeaserImageWrapper'

const TeaserImageElement = styled.img`
  display: block;
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
`
TeaserImageElement.displayName = 'TeaserImageElement'

export const TeaserImage = props => (
  <TeaserImageWrapper>
    <TeaserImageElement {...props} />
  </TeaserImageWrapper>
)
