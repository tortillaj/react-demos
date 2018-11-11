import styled, { css } from 'styled-components'
import { Link } from '@reach/router'

import { themeValue } from '../theme'

export const H1 = styled.h1`
  font-size: ${themeValue('typography.h1.fontSize')};
  line-height: ${themeValue('typography.h1.lineHeight')};
  font-weight: ${themeValue('typography.h1.fontWeight')};
  margin: ${themeValue('layout.spacing.medium')} 0 ${themeValue('layout.spacing.small')};
`
H1.displayName = 'H1'

export const H2 = styled.h2`
  font-size: ${themeValue('typography.h2.fontSize')};
  line-height: ${themeValue('typography.h2.lineHeight')};
  font-weight: ${themeValue('typography.h2.fontWeight')};
  margin: ${themeValue('layout.spacing.medium')} 0 ${themeValue('layout.spacing.small')};
`
H2.displayName = 'H2'

export const H3 = styled.h3`
  font-size: ${themeValue('typography.h3.fontSize')};
  line-height: ${themeValue('typography.h3.lineHeight')};
  font-weight: ${themeValue('typography.h3.fontWeight')};
  margin: ${themeValue('layout.spacing.medium')} 0 ${themeValue('layout.spacing.small')};
`
H3.displayName = 'H3'

export const P = styled.p`
  margin: 0;

  & + & {
    margin-top: ${themeValue('layout.spacing.medium')};
  }
`
P.displayName = 'P'

export const InternalLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  ${props => props.block && css`display: block;`};
`
InternalLink.displayName = 'InternalLink'
