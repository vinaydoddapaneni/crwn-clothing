import React, { Component } from 'react'
import Input from '../input'
import Button from '../button'
import { signInWithGoogle } from '../../../firebase/utils'

class Signin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    getSubmit = (e) => {
        e.preventDefault()

        this.setState({ email: '', password: '' })
    }
    getChanged = (e) => {
        const { value, name } = e.target.value
        this.setState({ [name]: value })
    }
    render() {
        const { email, password } = this.state
        console.log(email, password)
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <Input
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />

                    <Input
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />

                    <div className='buttons'>
                        <Button type='submit'>
                            Sign In
                        </Button>
                        <Button onClick={signInWithGoogle}>Sign In with Google</Button>
                    </div>
                </form>
            </div>

        )
    }
}

export default Signin
