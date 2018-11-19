import React from 'react'
import startFirebaseUI from './firebase'
import UnityGame from './components/UnityGame'

class App extends React.Component {
  componentDidMount() {
    startFirebaseUI('#firebaseui')
  }

  render() {
    return (
      <div>
        <div id="firebaseui" />
        <UnityGame />
      </div>
    )
  }
}

export default App
