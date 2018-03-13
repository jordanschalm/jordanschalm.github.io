import React, { Component } from 'react'
import Markdown from 'react-markdown'
import './index.css'

class Project extends Component {
  constructor(props) {
    super(props)
    this._renderDate = this._renderDate.bind(this)
  }

  render() {
    const { name, date, subheader, url } = this.props
    let { description, emoji } = this.props

    // If description is not an array of paragraphs, wrap it in an array.
    if (!Array.isArray(description)) {
      description = [description]
    }

    // TODO: size this correctly
    if (!emoji) {
      emoji = '>'
    }

    return (
      <div className="Project">
        <div className="Project__header">
          <span className="Project__emoji">{emoji}</span>
          <a className="Project__name" href={url}>
            {name}
          </a>
          <span className="Project__dot">{' • '}</span>
          <span className="Project__subheader">{subheader}</span>
        </div>
        {this._renderDate(date)}
        {description.map(paragraph => (
          <Markdown
            className="Project__description"
            key={paragraph}
            source={paragraph}
          />
        ))}
      </div>
    )
  }

  _renderDate = date => {
    // TODO: figure out styling for this
    return null
    if (!date) {
      return null
    }

    const wrap = children => (
      <div className="Project__date-container">{children}</div>
    )

    if (!date.start && !date.end) {
      return wrap(
        <span className="Project__date">{date.format('MMM D, YYYY')}</span>
      )
    }

    const end = date.end ? date.end.format('MMM YYYY') : 'Now'

    return wrap(
      <div>
        <span>{date.start.format('MMM YYYY')}</span>
        <span className="Project__date-arrow">{' → '}</span>
        <span>{end}</span>
      </div>
    )
  }
}

export default Project
