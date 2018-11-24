import React from 'react'
import ReactDOM from 'react-dom'
import { Spring , animated, config } from 'react-spring'
import startFirebaseUI from '../firebase'
import {Link} from 'react-router-dom'

const imageTransform = progress => `translate3d(-50%, -50%, 0) scale3d(${progress}, ${progress}, 1)`

class Main extends React.Component {

  state = { value: 1 }
  handleClick = () => this.setState(({value}) => ({ value: 1 - value}))

  componentDidMount() {
    startFirebaseUI('#firebaseui')
  }
  render() {
    console.log('progress', this.state.value)
    return (
      <div className="main">
        <div id="firebaseui" />
        <h2>
        <Link to="/game">Enter</Link>
        </h2>
        <Spring native to={{ progress: this.state.value }}>
          {({ progress }) => (
            <div className="mains" onClick={this.handleClick}>
              <animated.div className="background-transform" style={{ transform: progress.interpolate(imageTransform) }} />
            </div>
          )}
        </Spring>
      </div>
    )
  }
}

export default Main
