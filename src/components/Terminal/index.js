import React, { Component } from 'react'
import './index.css'

// Typestroke speeds
const QUICK = 200
const SLOW = 500

class Terminal extends Component {
  constructor(props) {
    super(props)

    this._animateText = this._animateText.bind(this)
    this.state = {
      visibleText: '',
      animating: true,
      timer: null,
    }
  }

  componentDidMount() {
    this._animateText(this.props.text)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.props.text) {
      // Reset any animation timers we have and restart cursor animation
      clearTimeout(this.state.timer)
      this._animateText(nextProps.text)
    }
  }

  render() {
    const { animating, visibleText } = this.state
    return (
      <div className="Terminal">
        <div className="Terminal__container">
          <h1 className="Terminal__text">{visibleText}</h1>
          <div className={`Terminal__cursor ${animating ? 'animating' : ''}`} />
        </div>
      </div>
    )
  }

  // Handles animating the text inside the terminal window
  _animateText = text => {
    let i = 1
    let typeTime = QUICK

    const typeOne = () => {
      if (i > text.length) {
        this.setState({ animating: false })
        return
      }

      // Add one character to visible text
      const visibleText = text.substring(0, i++)

      // Select next typestroke time (this is a simple Markov chain!)
      // The 1.2 coefficient accounts for added jitter
      if (typeTime < QUICK * 1.2) {
        typeTime = Math.random() < 0.66 ? QUICK : SLOW
      } else {
        typeTime = Math.random() < 0.5 ? QUICK : SLOW
      }

      // Add ±10% of jitter
      const jitter = typeTime + (Math.random() - 0.5) * (0.1 * typeTime)
      const timer = setTimeout(typeOne, typeTime + jitter)

      this.setState({
        visibleText,
        timer,
      })
    }
    typeOne()
  }
}

export default Terminal
