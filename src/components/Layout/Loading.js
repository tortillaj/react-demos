import React, { Suspense } from 'react'

import { PageLoading } from 'ui'

export const Loading = ({ children }) => <Suspense fallback={<PageLoading />}>{children}</Suspense>
