import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../navigation";
import LeftMenu from "../left-menu";
import HoneyProducts from "../honey-products";
import Login from "../login";
import Register from "../register";
import Contacts from "../contacts";
import About from "../about";
import Delivery from "../delivery";
import Admin from "../admin";
import HoneyDetails from "../honey-details";
import UserProfile from "../user-profile";
import Footer from "../footer";
import NotFound from "../404";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <LeftMenu />
                <div className="main-container">
                    <Switch>
                        <Route exact path="/" component={HoneyProducts} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/honey" render={(props) => <HoneyProducts {...props} product={"Honeys."} />} />
                        <Route exact path="/propolis" render={(props) => <HoneyProducts {...props} product={"Propolis."} />} />
                        <Route exact path="/pollen" render={(props) => <HoneyProducts {...props} product={"Pollen."} />} />
                        <Route exact path="/beeswax" render={(props) => <HoneyProducts {...props} product={"Beeswax."} />} />
                        <Route exact path="/delivery" component={Delivery} />
                        <Route path="/details/:honeyID" component={HoneyDetails} />
                        <Route path="/users/:userID" component={UserProfile} />
                        <Route exact path="/hk-admin" component={Admin} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;