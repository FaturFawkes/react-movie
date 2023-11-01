import React, { Component } from 'react'

interface ButtonProps {
    name: string
    label: string
    onClick?: React.MouseEventHandler
}

export class Button extends Component<ButtonProps> {
  render() {
    const {label, name, onClick} = this.props
    return (
        <button id={name}
        className='w-full bg-blue-500 rounded-md text-white font-semibold'
        onClick={onClick}
        >
            {label}
        </button>
    )
  }
}

export default Button