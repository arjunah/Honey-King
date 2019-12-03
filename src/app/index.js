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
                        <Route exact path="/"><HoneyProducts /></Route>
                        <Route exact path="/login"><Login /></Route>
                        <Route exact path="/register"><Register /></Route>
                        <Route exact path="/contacts"><Contacts /></Route>
                        <Route exact path="/about"><About /></Route>
                        <Route exact path="/delivery"><Delivery /></Route>
                        <Route exact path="/hk-admin"><Admin /></Route>
                        <Route path="/details/:honeyID"><HoneyDetails /></Route>
                        <Route path="/users/:userID"><UserProfile /></Route>
                        <Route><NotFound /></Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;