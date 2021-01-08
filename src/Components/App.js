import React, { useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

import AppRoute from './../utils/AppRoute';

// layout
import LayoutDefault from '../layouts/LayoutDefault';

// views
import Main from '../views/Main';
import About from '../views/About';
import Works from '../views/Works';
import Contact from '../views/Contact';

ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  let location = useLocation();

  useEffect(()=>{
    let page = location.pathname;
    trackPage(page);
    console.log('page',page)
  },[location])
  return (
    <>
        <Switch>
          <AppRoute exact path="/" component={Main} layout={LayoutDefault} />
          <AppRoute exact path="/about" component={About} layout={LayoutDefault} />
          <AppRoute exact path="/works" component={Works} layout={LayoutDefault} />
          <AppRoute exact path="/contact" component={Contact} layout={LayoutDefault} />
        </Switch>
    </>
  );
}

export default App;
