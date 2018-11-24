import React from 'react'
import startFirebaseUI from '../firebase'

class Main extends React.Component {
  componentDidMount() {
    startFirebaseUI('#firebaseui')
  }
  render() {
    return (
      <div className="main">
        <div id="firebaseui" />
        <div className="tree-image" />
      </div>
    )
  }
}

export default Main
