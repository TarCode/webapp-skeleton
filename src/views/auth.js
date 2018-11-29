import React, { Component } from 'react'
import { login } from '../utils'

function setUser(user, token) {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    window.location.reload()
    return null
}
export default class extends Component {
    state = {
        email: '',
        company: '',
        password: '',
        loading: false
    }


    login = () => {

        this.setState({ loading: true })
        
        const data = {
            email: this.state.email,
            company: this.state.company,
            password: this.state.password
        }

        login(data)
        .then(result => {
            console.log("LOGIN RESULT", result);
            
            if (!result.token) {
                if (result.message) {
                    this.setState({ err: result.message})
                } else if (result.non_field_errors) {
                    this.setState({ err: result.non_field_errors })
                } else {
                    this.setState({ err: result })
                }
            } else if (result.token) {
                if (result.user && result.token) {
                    setUser(result.user, result.token)

                } else if (result.data && result.data.user && result.data && result.data.token) {
                    setUser(result.data.user, result.data.token)
                }
            } 
        })
        .catch(err => {
            this.setState({ err })
        })

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
                <input placeholder='Company' id='company' type='text' onChange={this.handleChange} value={email}/>
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
