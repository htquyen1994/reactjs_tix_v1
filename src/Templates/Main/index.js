import { Route } from "react-router-dom";
import Header  from "../../Components/Header";
const HomeLayout = (props) => {
    return (
      <>
        <Header/>
        <main style={{position: 'absolute', top: '60px', left: '0', bottom: '0', width: '100%'}}>{props.children}</main>
      </>
    );
  };
  
  const RouteMain = (props) => {
    const { Component, ...routes } = props;
    return (
      <Route {...routes}>
        <HomeLayout>
          <Component />
        </HomeLayout>
      </Route>
    );
  };
  
  export default RouteMain;