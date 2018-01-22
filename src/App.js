import React, { Component } from 'react';
import WebFont from 'webfontloader';
import { TopBar } from 'components';
import './App.scss';

export default class App extends Component {
  componentDidMount() {
    WebFont.load({
      google: {
        families: ['Nunito Sans']
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <TopBar />
      </React.Fragment>
    );
  }
}
