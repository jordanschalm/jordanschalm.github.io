import React, { Component } from 'react'
import Markdown from 'react-markdown'
import ProgressIndicator from './../ProgressIndicator'

import C from './../../constants'
import './index.css'

const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: {
        value: '',
        valid: false,
        edited: false,
      },
      message: {
        value: '',
        valid: false,
        edited: false,
      },
      submitted: false,
    }

    this._handleSubmit = this._handleSubmit.bind(this)
    this._handleChange = this._handleChange.bind(this)
    this._validate = this._validate.bind(this)
    this._isSubmittable = this._isSubmittable.bind(this)
  }

  render() {
    const { email, message, submitted } = this.state
    const inProgress = submitted === C.EVENTS.IN_PROGESS
    const succeeded = submitted === C.EVENTS.SUCCESS

    return (
      <div>
        <Markdown>
          You can find most of my open-source and personal work on
          [GitHub](https://github.com/jordanschalm). I'm also on
          [LinkedIn](https://www.linkedin.com/in/jordanschalm/). Or get in touch
          by filling out the form below 👇
        </Markdown>
        <div className="Contact__form">
          <input
            className={!email.valid && email.edited ? 'Contact__invalid' : ''}
            type="email"
            placeholder="Email"
            disabled={inProgress || succeeded}
            onChange={ev => this._handleChange('email')(ev.target.value)}
            value={email.value}
          />
          <textarea
            className={
              !message.valid && message.edited ? 'Contact__invalid' : ''
            }
            disabled={inProgress || succeeded}
            placeholder="Your message"
            onChange={ev => this._handleChange('message')(ev.target.value)}
            value={message.value}
          />
          <div className="Contact__button-container">
            {!succeeded ? (
              <button
                disabled={!this._isSubmittable() || inProgress || succeeded}
                onClick={this._handleSubmit}
              >
                Get in touch!
              </button>
            ) : null}
            {inProgress ? (
              <div className="Contact__progress-indicator-container">
                <ProgressIndicator />
              </div>
            ) : null}
            {succeeded ? (
              <p className="Contact__status-message">Message received! 👍</p>
            ) : null}
          </div>
        </div>
      </div>
    )
  }

  _handleChange = field => val => {
    this.setState({
      [field]: {
        value: val,
        valid: this._validate(field)(val),
        edited: true,
      },
    })
  }

  _validate = field => val => {
    switch (field) {
      case 'email':
        return EMAIL_REGEX.test(val)
      case 'message':
        return val.length > 0
    }
  }

  _handleSubmit = () => {
    const { email, message } = this.state

    this.setState({ submitted: C.EVENTS.IN_PROGESS })
    fetch(`${C.API_URL}/mail`, {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        message: message.value,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .catch(err => {
        console.error(err)
        this.setState({ submitted: C.EVENTS.ERROR })
      })
      .then(() => {
        this.setState({ submitted: C.EVENTS.SUCCESS })
      })
  }

  _isSubmittable = () => this.state.email.valid && this.state.message.valid
}

export default Contact
