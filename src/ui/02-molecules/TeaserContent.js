import styled, { css } from 'styled-components'

import { themeValue } from '../theme'
import { TeaserHeading } from '../01-atoms'

export const TeaserContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${themeValue('layout.spacing.small')} ${themeValue('layout.spacing.medium')};
  transition: all 500ms 0s cubic-bezier(.165, .84, .19, .95);
  color: #fff;

  ${props => props.onClick && css`cursor: pointer;`};

  ${TeaserHeading} {
    color: inherit;
    font-size: ${themeValue('typography.h3.fontSize')};
    line-height: 1;
  }
`
TeaserContent.displayName = 'TeaserContent'
