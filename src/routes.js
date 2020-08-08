import React from 'react'
const Home = React.lazy(() => import('./pages/Home'))
const Shop = React.lazy(() => import('./pages/Shop'))
const TopicsList = React.lazy(() => import('./pages/TopicsList'))
const TopicDetail = React.lazy(() => import('./pages/TopicDetail'))
const Error404 = React.lazy(() => import('./pages/Error404'))

const Root = [
    { path: "/", exact: true, component: Home, name: 'Home' },
    { path: "/shop", exact: true, component: Shop, name: 'Shop' },
    { path: "/topics", exact: true, component: TopicsList, name: 'Topics List' },
    { path: "/topics/:topicId", exact: true, component: TopicDetail, name: 'Topics Detail' },
    { path: "/", exact: true, component: Error404, name: 'Error' },
]

export default Root