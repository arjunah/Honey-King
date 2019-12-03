import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../navigation";
import LeftMenu from "../left-menu";
import HoneyProducts from "../honey-products";
import Login from "../login";
import Register from "../register";
import Contacts from "../contacts";
import Admin from "../admin";
import HoneyDetails from "../honey-details";
import UserProfile from "../user-profile";
import Footer from "../footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <LeftMenu />
                <Switch>
                    <Route exact path="/"><HoneyProducts /></Route>
                    <Route exact path="/login"><Login /></Route>
                    <Route exact path="/register"><Register /></Route>
                    <Route exact path="/contacts"><Contacts /></Route>
                    <Route exact path="/hk-admin"><Admin /></Route>
                    <Route path="/details/:honeyID"><HoneyDetails /></Route>
                    <Route path="/users/:userID"><UserProfile /></Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;