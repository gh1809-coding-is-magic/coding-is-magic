import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

class Main extends React.Component {
  render() {
    return (
      <div className="splash">
        <Link to="/game">
        <img className="cass-image" src="./cass2.PNG"/>
        </Link>
      </div>
    )
  }
}

export default Main
