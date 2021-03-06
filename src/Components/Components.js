import React from "react";
import Home from "./Home/Home"
import SpecialsModule from "./Specials/Specials"
import SubscribeModule from "./Subscribe/Subscribe"
import LoginModule from "./Login/Login"
import AuthModule from "./Auth/Auth";
import LoginGood from "./Login/LoginGood"
import LoginHome from "./Login/LoginHome"


import { //need to import for Routing to work
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";



export default function Components() {
    return (
    <div>
      {/* where all of the routing is done between the components    */}
      <Router> 
      {/* adding routes for all components on the main nav bar */}
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/specials" component={SpecialsModule} />
          <Route path="/subscribe" component={SubscribeModule} />
          <Route path="/login" component={LoginModule} />
          <Route path="/loginhome" component={LoginHome} />
          <Route path="/register" component={AuthModule} />
          <Route path="/user/:email/" component={LoginGood} />
          {/* We used a dynamic route with the :email for when the user successfully logs in */}
          <Redirect to="/home" />
        </Switch>
      </Router>
      </div>
        
    );
  }

  
  
