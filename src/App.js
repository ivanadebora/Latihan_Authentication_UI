import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register'
import WaitingVerification from './components/WaitingVerfication';
import Verified from './components/Verified';


class App extends Component {
  render() {
    return (
      <div>
        <Header navBrand={'Hokage'}/>

      <div>
      <Route exact path="/" component={Homepage}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/waitingverification" component={WaitingVerification} />
      <Route path="/verified" component={Verified} />
      </div>
      </div>
    );
  }
}

export default App;
