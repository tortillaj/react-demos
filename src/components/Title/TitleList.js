import React from 'react'

import { Grid, Inset, ListItem } from 'ui'
import { TitleTeaser } from 'components'

export const TitleList = ({ titles }) => (
  <Inset>
    <Grid>
      {titles.map(t => (
        <ListItem key={t.titleId}>
          <TitleTeaser title={t} />
        </ListItem>
      ))}
    </Grid>
  </Inset>
)
