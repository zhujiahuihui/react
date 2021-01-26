
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter} from 'react-router-dom';
import APP from './app';
// import router from './router/index';
import 'antd/dist/antd.css';
ReactDOM.render(
    (
    <BrowserRouter>
        <APP/>
    </BrowserRouter>
    ),
    document.getElementById('root'))