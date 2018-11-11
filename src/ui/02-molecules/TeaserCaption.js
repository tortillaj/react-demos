import styled from 'styled-components'

import { themeValue } from '../theme'

export const TeaserCaption = styled.figcaption`
  padding: ${themeValue('layout.spacing.small')} ${themeValue('layout.spacing.medium')};
  margin: 0;
`
TeaserCaption.displayName = 'TeaserCaption'
