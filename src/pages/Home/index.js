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
                {/* <button onClick={()=>this.props.history.push('/topics')}>Topics</button>
                <Link to={`/topics${this.props.match.url}id:13`}>To Topics 13</Link>
                <Link to={`/topics${this.props.match.url}id:14`}>To Topics 14</Link>
                <Link to={`/topics${this.props.match.url}id:17`}>To Topics 17</Link> */}
                {/* Menu items ends */}
            </div>
        )
    }
}

export default Home
