import React from 'react'
import {Header, Project, Content} from "./Content";

export const ContentManager = (props) => (
  <div>
    <Header title={props.content.Header.title} id={props.content.Header.id} textContent={props.content.Header.text}/>
    <div title={props.content.Projects.title} id={props.content.Projects.id}>
      {props.content.Projects.projectArr.map((project) => (
        <Project title={project.title} textContent={project.text} url={project.url} />
      ))}
    </div>
    <Content title={props.content.About.title} id={props.content.About.id} textContent={props.content.About.text}></Content>
  </div>
)