import React from 'react';
import { Form, Input, Button } from 'antd';
import { Preference } from './Preference';

import logo from './../images/logo.png';

export class TopBar extends React.Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Preference />
        </header>
      );
    }
  }