import React, { Component } from 'react'
import '../../assets/index.scss'
import Menu from '../../components/menu'

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="homepage">
                {/* Menu items */}
                <Menu />
                {/* Menu items ends */}
            </div>
        )
    }
}

export default Home
