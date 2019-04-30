import { Home } from '../pages/Home'
// list of all your routes. aka pages you want to route/navigate to
export default [
  {
    key: 1,
    exact: true,
    path: '/',
    component: Home
  },
  {
    key: 2,
    exact: true,
    path: '/1',
    component: Home
  },
  {
    key: 3,
    exact: true,
    path: '/2',
    component: Home
  },
  {
    key: 4,
    exact: true,
    path: '/3',
    component: Home
  }
]
