import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Main, Participate} from './container/index'

class App  extends Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Main} exact/>
            <Route path='/survey/participate' component={Participate} exact/>
          </Switch>
        </BrowserRouter>
      </div>
     );
  }
}

export default App;