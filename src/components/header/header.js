import React, {Component} from 'react'

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Musica App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Artist</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Songs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Favorits</a>
                </li>
                </ul>
            </div>
            </nav>
    )
}

export default Header;