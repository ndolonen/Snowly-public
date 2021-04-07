import React from 'react'
import './Content.scss'

export const Header = ({title, id, textContent}) => (
    <header id={id}>
        <div id="header-content">
            <h1>{title}</h1>
            {textContent.split("\n").map((item, i) => {
                return <p key={i}>{item}</p>
            })}
        </div>
    </header>
);

export const Content = ({title, id, textContent}) => (
    <div class="post-container" id={id}>
        <div class="post-content">
            <h1>{title}</h1>
            {textContent.split("\n").map((item, i) => {
                return <p key={i}>{item}</p>
            })}
        </div>
    </div>
);

export const Project = ({title, textContent, url}) => (
    <div class="grid-container">
        <div class="grid-content">
            <h1>{title}</h1>
            {textContent.split("\n").map((item, i) => {
                return <p key={i}>{item}</p>
            })}
            <a href={url}>{url}</a>
        </div>
    </div>
);