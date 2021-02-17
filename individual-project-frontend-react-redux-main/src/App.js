import React, {Component} from 'react';
import TopBar from './containers/TopBar/TopBar';
import Main from './containers/Main/Main';
import { Layout} from 'antd';
import './App.css';


class App extends Component {
    render() {
        return (
            <Layout>
            <div className="App">
                <TopBar/>
                <Main/>
            </div>
            </Layout>
        )
    }
}

export default App;