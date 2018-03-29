import React from 'react'
import Markdown from 'react-markdown'
import './index.css'

const MiniProject = ({ name, url, emoji }) => (
  <div className="MiniProject">
    <span className="MiniProject__emoji">{emoji}</span>
    <a className="MiniProject__name" href={url}>
      {name}
    </a>
  </div>
)

export default MiniProject
