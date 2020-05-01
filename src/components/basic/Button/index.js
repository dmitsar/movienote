import React  from 'react';
//import { Icon } from '../Icon'
//import './style.css'

export const Button = props => {
  const { icon, text, onClick, disabled } = props
  let buttonClass = 'button'

  if (icon) {
    buttonClass += ' __iconed'
  }

  if (disabled) {
    buttonClass += ' __disabled'
  }

  if (props.class) {
    buttonClass += ` ${props.class}`
  }

  if (props.style === 'dark') {
    buttonClass += ' __dark'
  }

  if (props.style === 'borderless') {
    buttonClass += ' __borderless'
  }

  return (
    <button
      class={buttonClass}
      onClick={onClick}
      disabled={props.disabled}
      type={props.type || 'button'}
    >
      <span class='button-text'>{text}</span>
    </button>
  )
}
