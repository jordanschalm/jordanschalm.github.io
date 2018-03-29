import React from 'react'
import MiniProject from './../MiniProject'
import './index.css'

const MiniProjectList = ({ projects }) => (
  <div className="MiniProjectList">
    {projects.map(project => <MiniProject key={project.name} {...project} />)}
  </div>
)

export default MiniProjectList
