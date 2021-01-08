import React, { useRef, useEffect } from 'react';
import { useLocation, Switch} from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';


// layout
import LayoutDefault from './layouts/LayoutDefault';

// views
import Home from './views/Home';
import About from './views/About';
import Works from './views/Works';
import Contact from './views/Contact';

ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();
  
  useEffect(() => {
    
    const page = location.pathname;
    console.log('useEffect');
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    
    // console.log('childRef',childRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
    ref={childRef}
    children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute path="/about" component={About} layout={LayoutDefault} />
          <AppRoute path="/works" component={Works} layout={LayoutDefault} />
          <AppRoute path="/contact" component={Contact} layout={LayoutDefault} />
        </Switch>
        )} />
  );
}

export default App;