import React, { Suspense } from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop'
import {
  Switch, Route
} from 'react-router-dom'
import Root from './routes';

function App() {
  return (
    <ScrollToTop>
      <Switch>
        <Suspense fallback={<div>loading...</div>}>
          {Root.map((list,key) => (
            <Route key={key} exact={list.exact} path={list.path} component={list.component} />
          ))}
        </Suspense>
      </Switch>
    </ScrollToTop>
  )
}

export default App;
