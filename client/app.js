import React from 'react'
import UnityGame from './components/UnityGame'
import Main from './components/Main'
import {Route, BrowserRouter, Switch, HashRouter} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Switch> */}
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/game" component={UnityGame} />
          {/* </Switch> */}
        </div>
      </BrowserRouter>
      // <div>
      //   <UnityGame />
      // </div>
    )
  }
}

export default App
