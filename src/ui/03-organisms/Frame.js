import React from 'react'
import styled from 'styled-components'

import { themeValue } from '../theme'

const Wrapper = styled.article`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`
Wrapper.displayName = 'FrameWrapper'

const Header = styled.header`
  background-image: linear-gradient(${themeValue('colors.primary.interaction')}, ${themeValue('colors.primary.base')});
  padding: ${themeValue('layout.spacing.medium')} 0;
`
Header.displayName = 'FrameHeader'

const Main = styled.main`
  background-color: ${themeValue('colors.background')};
  flex: 1;
  margin: ${themeValue('layout.spacing.medium')} 0;

  @media all and (min-width: ${themeValue('sizes.large')}) {
    margin: ${themeValue('layout.spacing.xl')} 0;
  }
`
Main.displayName = 'FrameMain'

const Aside = styled.aside``
Aside.displayName = 'FrameAside'

const Footer = styled.footer`
  background-color: ${themeValue('colors.primary.interaction')};
  height: 15vh;
`
Footer.displayName = 'FrameFooter'

export class Frame extends React.Component {
  static Header = Header
  static Main = Main
  static Aside = Aside
  static Footer = Footer
  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    )
  }
}
