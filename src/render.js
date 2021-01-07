import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addLike, addMessage, postMessage, updateNewMessageText, updateNewPostMessage} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     postMessage={postMessage}
                     updatePostMessage={updateNewPostMessage}
                     addMessage={addMessage}
                     updateMessageText={updateNewMessageText}
                     addLike={addLike}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
