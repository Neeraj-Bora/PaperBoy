import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default class Navbar extends Component{
    defaultPropes={
        country: "in"
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">

                    <div className="container-fluid">
                    <Link className="navbar-brand" to="/">PaperBoy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/business">Business</Link></li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                        </li>
                    </ul>
                    
                    </div>
                </div>
                {/* <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li ><Link class="dropdown-item" to='/in' onClick={this.props.changeCountry("in")}>India</Link></li>
                            <li ><Link class="dropdown-item" to='/us' onClick={this.props.changeCountry("us")}>USA</Link></li>
                            <li ><Link class="dropdown-item" to='/gb' onClick={this.props.changeCountry("gb")}>UK</Link></li>
                        </ul>
                        </div> */}
                </nav>
            </div>
        )
    }
}