import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import ScrollToTop from './root/Index/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';
import './root/Index/Index.css';

ReactDOM.render((
    <BrowserRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();