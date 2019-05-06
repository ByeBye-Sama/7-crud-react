import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import './assets/styles/main.scss';

import {
  Header,
  Main,
  Footer,
} from './presentation/layout';

import {
  PageCreate,
  PageUsers,
  PageEdit,
} from './presentation/pages';

export function App() {
  return (
    <div className="Wrapper">
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route path="/create" component={PageCreate} />
            <Route exact path="/users" component={PageUsers} />
            <Route path="/users/edit/:id" component={PageEdit} />
            <Redirect exact from="/" to="/create" />
          </Switch>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}
