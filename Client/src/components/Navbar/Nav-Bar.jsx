import React from 'react';
import './Nav-Bar.scss'

export const NavBar = (props) => (
    <div>
        <nav id="nav">
            <a className = "nav-item" href={"#header"}> {props.lang === "english" ? "Home" : "Hjem"} </a>
            <a className="nav-item" href={"#projects"}> {props.lang === "english" ? "Projects" : "Prosjekter"} </a>
            <a className = "nav-item" href={"#about"}> {props.lang === "english" ? "About" : "Om meg"} </a>
        </nav>
    </div>
);

export const IconButtons = (props) => (
    <div>
        <div class="external-links">
            {props.Contact.map((e) => (
                <div class="logo-container">      
                    <a class="logo-default" id={e.id} title={e.title} href={e.url} /> 
                </div>
            ))}
        </div>
    </div>
);


export const LanguageSelector = (props) => (
    <div id="language-selector">
        <p class="lang-sel" onClick={props.state.bind(this, "norsk")}>Norsk</p> 
        <p>|</p> 
        <p class="lang-sel" onClick={props.state.bind(this, "english")}>English</p>
    </div>
)
