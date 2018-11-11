import styled from 'styled-components'

import { themeValue } from '../theme'
import { H2 } from './Typography'

export const TeaserHeading = styled(H2)`
  font-weight: 600;
  font-size: ${themeValue('typography.h5.fontSize')};
  line-height: ${themeValue('typography.h5.lineHeight')};
  color: ${themeValue('colors.foreground')};
`
TeaserHeading.displayname = 'TeaserHeading'
