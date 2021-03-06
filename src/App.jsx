import React from 'react';
import {HashRouter} from "react-router-dom";
import "./App.css";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import ContentWithResponsive from "./components/ContentWithResponsive";



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <>
                <ContentWithResponsive blackTheme={this.props.blackTheme} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        blackTheme: state.app.blackTheme
    }
}
const AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = () => {

    return (
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </HashRouter>
        </React.StrictMode>
    )
};
export default SocialNetworkApp;
