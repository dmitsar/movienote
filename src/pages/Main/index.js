import React  from 'react';
import './style.css'

export const Main = () => (
  <div class='page main __fullWidth __flex __noGap'>
    <div class='main-content'>
      <div class='main-block main-title __dark'>

        <form class="loginForm" display="inline-block">
        <h1>MovieNote</h1>
          <div class="input-wrapper"><input class="input __typing" type="email" name="email" placeholder="Ваш email"/>
          </div>
          <div class="input-wrapper"><i class="material-icons icon icon-normal hoverable __password"></i><input class="input __typing" type="password" name="password" placeholder="Ваш пароль"/>
          </div>
            <button class="button" type="submit"><span class="button-text">Войти</span>
            </button>
      </form>

        <div class='main-image'>
        <img src='https://via.placeholder.com/800x600' alt='' width="800" height="600" align="top" />
        </div>
      </div>
    </div>
  </div>
)