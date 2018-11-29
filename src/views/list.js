import React, { Component } from 'react'

export default class extends Component {

    state = {
        loading: false,
        data: []
    }

    componentDidMount() {
        this.setState({ loading: true })
        setTimeout(() => {
            const fakeresults = [
                { name: 'Joe', amount: 1 },
                { name: 'Dirt', amount: 2 }
            ]
           this.setState({
               data: fakeresults
           })
        }, 2000)
    }

    logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        window.location.reload()
    }

    render () {
        const { data, loading } = this.state
        return (
            <div className='row center'>
                <button onClick={this.logout}>Logout</button>
                <h2>Home</h2>
                {
                    loading ?
                    <p>Loading...</p> :
                    data && data.length > 0 ?
                    data.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    )) :
                    <li>No data yet</li>
                }
            </div>
        )
    }
}
