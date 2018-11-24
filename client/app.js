import React from 'react'
// import startFirebaseUI from './firebase'
import UnityGame from './components/UnityGame'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './components/Main'

class App extends React.Component {
  // componentDidMount() {
  //   startFirebaseUI('#firebaseui')
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <div id="firebaseui" /> */}
          <Route exact path="/" component={Main} />
          <Route exact path="/game" component={UnityGame} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
