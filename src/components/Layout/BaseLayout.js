import React from 'react'

import { Frame, Inset, Logo } from 'ui'

export const BaseLayout = ({ children, ...rest }) => (
  <Frame {...rest}>
    <Frame.Header>
      <Inset>
        <Logo />
      </Inset>
    </Frame.Header>
    <Frame.Main>{children}</Frame.Main>
    <Frame.Footer></Frame.Footer>
  </Frame>
)
