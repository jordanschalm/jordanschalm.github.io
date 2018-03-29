import React from 'react'
import Terminal from './../components/Terminal'
import Preface from './../components/Preface'
import Header from './../components/Header'
import MiniProjectList from './../components/MiniProjectList'
import Project from './../components/Project'
import Contact from './../components/Contact'

import data from './../data'

const HomePage = () => (
  <div>
    <Terminal text="Jordan Schalm" />
    <Preface />
    <Header title="Things I Do" />
    {data.projects.current.map(project => (
      <Project key={project.name} {...project} />
    ))}
    <Header title="Things I Have Done" />
    {data.projects.older.map(project => (
      <Project key={project.name} {...project} />
    ))}
    <MiniProjectList projects={data.projects.minor} />
    <Header title="Contact" />
    <Contact />
  </div>
)

export default HomePage
