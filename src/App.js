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
  // render={props => (
  //   <list.component {...props} />
  // )}
  />
))
class App extends React.Component {
  render() {
    return (
      <ScrollToTop>
        <Header />
        <Switch>
          <Suspense fallback={<div className="loader"></div>}>
            {menu}
            {/* <Redirect from={} to="/error" /> */}
          </Suspense>
        </Switch>
      </ScrollToTop>
    )
  }
}

export default App;
