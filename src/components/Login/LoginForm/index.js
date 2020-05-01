import React, { Component }  from 'react';
import { Input } from 'D:/movienote/src/components/basic/Input'
import { Button } from 'D:/movienote/src/components/basic/Button'
//import vkIcon from '../icons/vk.svg'
//import facebookIcon from '../icons/facebook.svg'
//import twitterIcon from '../icons/twitter.svg'
//import './style.css'
//import { AuthorizationService } from 'services/authorization'

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    loginError: false
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
   // const { email, password } = this.state
    //AuthorizationService.authorize({
     // email,
    //  password
    //})
      .then(() => window.location.reload())
      // TODO: should handle session without page refresh
      .catch(() =>
        this.setState({
          password: '',
          loginError: true
        })
      )
  }

  render (props, { email, password, loginError }) {
    return (
      <form onSubmit={this.handleSubmit} class='loginForm'>
        {loginError && (
          <span class='loginForm-error'>Введён неверный логин или пароль</span>
        )}
        <Input
          onChange={this.handleChange}
          value={email}
          type='email'
          name='email'
          placeholder='Ваш email'
        />
        <Input
          onChange={this.handleChange}
          value={password}
          type='password'
          name='password'
          placeholder='Ваш пароль'
        />
        <Button text='Войти' type='submit' />
        <div class='loginForm-links'>
          <a class='link hoverable'>Вход по телефону</a>
          <a
            onClick={() => props.onShowRecovery(true)}
            class='link hoverable'>
              Забыли пароль?
          </a>
        </div>
        <div class='loginForm-socials'>
          <p class='loginForm-caption'>
            Или используйте вход через социальные сети
          </p>
          <div class='loginForm-socialsItems'>
            <button
              class='loginForm-socialsItem'
//              dangerouslySetInnerHTML={{ __html: vkIcon }}
            />
            <button
              class='loginForm-socialsItem'
 //             dangerouslySetInnerHTML={{ __html: facebookIcon }}
            />
            <button
   //           dangerouslySetInnerHTML={{ __html: twitterIcon }}
              class='loginForm-socialsItem'
            />
          </div>
        </div>
      </form>
    )
  }
}
