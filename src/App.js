import React, { Suspense } from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop'
import {
  Switch, Route
} from 'react-router-dom'
import Root from './routes';
import Header from './components/Header';

const menu = Root.map((list, key) => (
  <Route
    key={key}
    exact={list.exact}
    path={list.path}
    component={list.component}
    render={props => (
      <list.component {...props} />
    )}
  />
))
function App() {
  return (
    <ScrollToTop>
      <Header />
      <Switch>
        <Suspense fallback={<div className="loader"></div>}>
          {menu}
        </Suspense>
      </Switch>
    </ScrollToTop>
  )
}

export default App;
