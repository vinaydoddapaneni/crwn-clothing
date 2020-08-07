import React, { Component } from 'react'
import '../../assets/styles/index.scss'

class Home extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="directory-menu">
                    {/* Menu items */}
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">HATS</h1>
                            <span className="sub-title">Shop Now</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">JACKETS</h1>
                            <span className="sub-title">Shop Now</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">SNEAKERS</h1>
                            <span className="sub-title">Shop Now</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">WOMENS</h1>
                            <span className="sub-title">Shop Now</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">MENS</h1>
                            <span className="sub-title">Shop Now</span>
                        </div>
                    </div>
                    {/* Menu items ends */}
                </div>
            </div>
        )
    }
}

export default Home
