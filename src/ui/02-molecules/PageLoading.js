import React from 'react'
import styled from 'styled-components'

import {LoadingSpinner} from '../01-atoms'

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  ${LoadingSpinner} {
    margin: auto;
  }
`

// @TODO: Rewrite this with state so I can delay its appearance
export const PageLoading = () => (
  <LoadingWrapper>
    <LoadingSpinner size="10vmax" color="colors.primary.base" />
  </LoadingWrapper>
)
PageLoading.displayName = 'PageLoading'
