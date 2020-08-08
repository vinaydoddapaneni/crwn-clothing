import React, { Component } from 'react'
import Input from '../input'

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
    getChange = (e) => {
        const { value, name } = e.target.value
        this.setState({ [name]: value })
    }
    render(...getChange) {
        const { email, password } = this.state
        return (
            <div className="sign-in">
                <h2>I alredy have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.getSubmit}>

                    <Input
                        name="email"
                        type="email" {...getChange}
                        value={email} required
                        label="email"
                    />
                    <Input
                        name="password"
                        type="passowrd" {...getChange}
                        value={password} required
                        label="password"
                    />

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default Signin
