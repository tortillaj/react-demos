import React, { Suspense } from 'react'

export const Loading = ({ children }) => <Suspense fallback="Loading">{children}</Suspense>
