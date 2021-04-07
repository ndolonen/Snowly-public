import React, {Component} from 'react';
import {NavBar, IconButtons, LanguageSelector} from "./components/Navbar/Nav-Bar";
import {ContentManager} from "./components/Content/Content-Manager"
import {Footer} from "./components/Footer/Footer";
import { Contact } from "./config/Contact.json"
import { EnglishContent, NorwegianContent } from "./config/Content.json";



class App extends Component {
  constructor() {
    super();

    this.state = {
      language: "english"
    }
  }

  handleLangChange = language => {
    this.setState({language})
  }

  render() {
    return (
      <div className="App">
        <NavBar lang={this.state.language} />
        <IconButtons Contact={Contact} />
        <LanguageSelector state={this.handleLangChange} />
        <ContentManager content={this.state.language==="english" ? EnglishContent : NorwegianContent} />
        <Footer />
      </div>
    );
  }
}

export default App;
