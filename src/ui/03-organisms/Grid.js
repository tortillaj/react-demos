import styled from 'styled-components'

import { themeValue } from '../theme'

export const Grid = styled.section`
  display: inline-grid;
  margin: 0 auto;

  @media all and (min-width: ${themeValue('sizes.small')}) {
    grid-gap: ${themeValue('layout.spacing.large')};
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (min-width: ${themeValue('sizes.medium')}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (min-width: ${themeValue('sizes.large')}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
Grid.displayName = 'Grid'
