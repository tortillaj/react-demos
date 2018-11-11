import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

import svg from '../images/hoopla-white-logo.svg'

const LogoSvg = styled.img.attrs({
  src: svg,
})`
  width: 100px;
  display: block;
  margin: 0;
  padding: 0;
`

export const Logo = () => (
  <Link to="/">
    <LogoSvg />
  </Link>
)
