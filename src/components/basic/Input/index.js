import { h, Component, createRef } from 'preact'
//import { Icon } from '../Icon'
import './style.css'

export class Input extends Component {
  ref = createRef()

  state = {
    passwordVisible: false,
    focused: false
  }

  toggleVisibility = () =>
    this.setState({
      passwordVisible: !this.state.passwordVisible
    })

  toggleDate = ({ target }) => {
    this.setState({
      focused: document.activeElement === target
    })
  }

  render (props, { passwordVisible, focused, disabled }) {
    const eyeIcon = passwordVisible ? 'visibility_off' : 'visibility'
    const tempProps = Object.assign({}, props)
    if (props.type === 'password' && passwordVisible) {
      tempProps.type = 'text'
    }
    let hasValue = false
    if (
      (props.value && props.value.length > 0) ||
      (this.ref.current && this.ref.current.value.length !== 0)
    ) {
      hasValue = true
    }
    if (props.type === 'date' && !focused && !hasValue) {
      tempProps.type = 'text'
    }
    let inputClass = 'input'
    if (props.value) {
      inputClass += ' __typing'
    }

    const modifierClass = props.modifier ? ` __${props.modifier}` : ''
    const toggleDate = props.type === 'date' ? this.toggleDate : undefined

    return (
      <div class={`input-wrapper${modifierClass}`}>
        {props.type === 'tel' && props.value && <Icon class='__phone' />}
        {props.type === 'date' && <Icon item='date_range' class='__date' />}
        {props.type === 'search' && <Icon item='search' class='__search' />}
        {props.type === 'location' && (
          <Icon
            item='map'
            class='__map'
            onClick={() => props.selectLocation(props.name)}
          />
        )}
        {props.type === 'location' &&
        props.disabled && (
          <Icon
            item='clear'
            class='__clear'
            onClick={() => props.clearLocation(props.name)}
          />
        )}
        {props.type === 'password' && (
          <Icon
            item={eyeIcon}
            onClick={this.toggleVisibility}
            class='__password'
          />
        )}
        <input
          ref={this.ref}
          onFocus={toggleDate}
          onBlur={toggleDate}
          class={inputClass}
          {...tempProps}
        />
      </div>
    )
  }
}
