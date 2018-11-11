import React, { Component } from 'react'
import { Router } from '@reach/router'

import { HomePage, TitlePage } from 'pages'
import { BaseLayout, Loading } from 'components'

class App extends Component {
  render() {
    return (
      <BaseLayout>
        <Loading>
          <Router>
            <HomePage path="/" />
            <TitlePage path="title/:titleId" />
          </Router>
        </Loading>
      </BaseLayout>
    )
  }
}

export default App
