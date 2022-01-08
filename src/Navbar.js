import React, { Component } from "react"
import { Link } from "react-router-dom"
import './style.css'

class Navbar extends Component {
    render() {
        var islogin=this.props.islogin
        if(islogin == null ){
            islogin = false
        }
        return (
            <div>
                <header className="site-header">
                    <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top" style={{background:'#0d62a9'}}>
                        <div className="container">

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarToggle">
                                <div className="navbar-nav mr-auto">
                                    {/* <a class="nav-item nav-link" href="#"></a> */}
                                    <Link to="/" className="nav-item nav-link">Home</Link>
                                    
                                </div>
                                <div className="navbar-nav">
                                
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }

}

export default Navbar