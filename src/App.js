import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav navbar={props.state.navbar}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer
                    store={props.store}/>}/>
                <Route path="/profile" render={() => <Profile
                    store={props.store}/>}
                />
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
};
export default App;
