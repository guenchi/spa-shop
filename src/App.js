import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import {
  Home,
  ResetPassword,
  ShoppingCar,
  Signup,
  Login,
  Checkout,
  ProductDetail,
  Brand,
  UserBox
} from "./pages";
import { Header, Toolbar, Footer } from "./components";
import recaptcha from "./config-recaptcha.json";
class App extends Component {
  componentDidMount() {
    const parent =
      document.querySelector("#portal") || document.createElement("div");
    const children = parent.children;
    if (children.length > 0) {
      parent.removeChild(children[0]);
    }
    parent.setAttribute("id", "portal");
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute(
      "src",
      `https://www.google.com/recaptcha/api.js?render=${recaptcha.site_key}`
    );
    parent.appendChild(script);
    document.body.appendChild(parent);
    ReactDOM.createPortal(parent, document.querySelector("#portal"));
  }

  render() {
    return (
      <div>
        <Header />
        <Toolbar />
        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route path="/shopping-car" component={ShoppingCar} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/brand/:brand" component={Brand} />
          <Route path="/userbox" component={UserBox} />
          <Route
            path="/orderdetail/:id"
            render={({ location, match }) => (
              <div>
                {match.path}
                {console.log(match)}
              </div>
            )}
          />

          <Route
            path="/product/:id"
            //component={Test}
            render={props => <ProductDetail {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
