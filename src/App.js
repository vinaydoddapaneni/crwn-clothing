import React, { Suspense } from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop'
import {
  Switch, Route
} from 'react-router-dom'
import Root from './routes';

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
      <Switch>
        <Suspense fallback={<div>loading...</div>}>
          {menu}
          {/* <Redirect from="/" to="/" /> */}
          {/* <Route render={() => <Redirect to={{ pathname: "/" }} />} /> */}
        </Suspense>
      </Switch>
    </ScrollToTop>
  )
}

export default App;
