import React, { Component } from 'react'
import Input from '../components/Input'
import { withRouter } from '../withRouter'
import Button from '../components/Button'
// import Swal from 'sweetalert2'

interface RegisterProps {
    navigate: any
}

interface RegisterState {
    username: string
    password: string
}

export class Register extends Component<RegisterProps, RegisterState> {
    state = {
        username:"",
        password:""
    }

    handleRegister() {
        // Swal.fire({
        // icon: 'success',
        // title: 'Success',
        // text: 'Register Successfull!!',
        // confirmButtonText: 'OK'
        // })
        this.props.navigate(`/home/${this.state.username}`, {
            state: {
                username: this.state.username,
                password: this.state.password
            }
        })
    }
  render() {
    const {username, password} = this.state
    return (
        <div className='min-h-screen w-screen bg-gray-100 flex items-center justify-center'>
            <div className='bg-white p-6 rounded-md shadow-md'>
                <Input 
                name='username-input'
                label='Username'
                type='text'
                value={username}
                onChange={(e) => this.setState({username: e.target.value})}
                />
                <Input
                name='password-input'
                label='Password'
                type='password'
                value={password}
                onChange={(e) => this.setState({password: e.target.value})}
                />
                <Button label='Register' name='register' onClick={() => this.handleRegister()}></Button>
            </div>
        </div>
    )
  }
}

export default withRouter(Register)