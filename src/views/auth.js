import React, { Component } from 'react'

export default class extends Component {
    state = {
        email: '',
        password: '',
        loading: false
    }

    login = () => {

        this.setState({ loading: true })
        
        // Simulate API call
        setTimeout(() => {
            const user = { email: this.state.email }
            const token = 'testfaketoken'
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', token)
            window.location.reload()
        }, 2000)

    }

    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }

    render () {
        const { email, password, loading } = this.state

        return (
            <div className='row center'>
                <h2>Login</h2>
                <input placeholder='Email' id='email' type='email' onChange={this.handleChange} value={email}/>
                <br/>
                <input placeholder='Password' id='password' type='password' onChange={this.handleChange} value={password}/>
                <br/>
                <button disabled={loading} onClick={this.login}>
                    {
                        loading ?
                        "Loading..." :
                        "Login"
                    }
                </button>
            </div>
        )
    }
}
