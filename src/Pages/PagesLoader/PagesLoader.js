import { lazy } from 'react'

export const Home = lazy(() =>
  import('../Home').then((module) => ({ default: module.Home }))
)

export const Category = lazy(() =>
  import('../Category').then((module) => ({ default: module.Category }))
)

export const Detail = lazy(() =>
  import('../Detail').then((module) => ({ default: module.Detail }))
)

export const Signin = lazy(() =>
  import('../Signin').then((module) => ({ default: module.Signin }))
)

export const NotFound = lazy(() =>
  import('../NotFound').then((module) => ({ default: module.NotFound }))
)
