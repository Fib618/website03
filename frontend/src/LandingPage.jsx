import React, { Component } from 'react';
import LoginForm from './components/LoginForm';

class LandingPage extends Component {
  render() {
    return (
      <div>
        LandingPage
        <LoginForm formText={'ログイン'} />
      </div>
    );
  }
}

export default LandingPage;