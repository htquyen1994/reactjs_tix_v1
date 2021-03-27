import './App.css';
import React, { useLayoutEffect } from "react";
import RouteMain from './Templates/Main';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routerMain } from './Config/router';
import { fetchFirebaseCurrentUser } from './Redux/Actions/firebase.action';
import { connect } from 'react-redux';
import TrailerYoutube from './Components/TrailerYoutube';

function App({fetchFirebaseCurrentUser}) {

  useLayoutEffect(() => {
    fetchFirebaseCurrentUser();
  }, []);

  function renderMainRoute(routers) {
    return routers.map((route, index) => {
      console.log(route);
      return <RouteMain {...route} key={index} />;
    });
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          {renderMainRoute(routerMain)}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default connect(null, {fetchFirebaseCurrentUser})(App)