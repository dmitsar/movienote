import React from 'react';
//import { Tabs, Tab } from 'components/Tabs'
import { LoginForm } from './LoginForm'
//import { RegistrationForm } from './RegistrationForm'
//import { RecoveryForm } from './RecoveryForm'
//import { Icon } from 'components/basic'
//import './style.css'


export class Login extends Component {
  state = {
    activeTab: 0,
    isRecovery: false
  }

  setActiveTab = tabId => this.setState({ activeTab: tabId })

  switchRecovery = show => this.setState({ isRecovery: show })

  render ({ closeWindow }, { isRecovery, activeTab }) {
    return (
      <div class='login'>
        <div class='login-form'>
          <img class='login-image' src='https://via.placeholder.com/575x575' />
          <div class='login-content'>
          </div>
        </div>
      </div>
    )
  }
}
