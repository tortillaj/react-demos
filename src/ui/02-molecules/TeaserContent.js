import styled, { css } from 'styled-components'

import { themeValue } from '../theme'
import { TeaserHeading } from '../01-atoms'

export const TeaserContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${themeValue('layout.spacing.small')} ${themeValue('layout.spacing.medium')};
  transition: all 500ms 0s cubic-bezier(.165, .84, .19, .95);

  ${props => props.onClick && css`cursor: pointer;`};

  ${TeaserHeading} {
    color: #fff;
    font-size: ${themeValue('typography.h3.fontSize')};
    line-height: 1;
  }
`
TeaserContent.displayName = 'TeaserContent'
