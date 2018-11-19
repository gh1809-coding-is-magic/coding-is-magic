import React from 'react'
// import {Navbar} from './components'
import startFirebaseUI from './firebase'
import Routes from './routes'

class App extends React.Component {
  componentDidMount() {
    startFirebaseUI('#firebaseui')
  }

  render() {
    return (
      <div>
        <div id="firebaseui" />
        <Routes />
      </div>
    )
  }
}

export default App
