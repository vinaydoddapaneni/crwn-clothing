import React from 'react'
const Home = React.lazy(() => import('./pages/Home'))

const Root = [
    { path: "/", exact: true, component: Home, name: 'Home' }
]

export default Root