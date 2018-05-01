import React, { Component } from 'react';
import header from '../../../../../images/header.jpeg';

class Header extends Component {

    render() {
        return (
            <header className="c-header">
                <div className="c-header__headingContainer">
                    <h1 className="c-header__heading">Humble Beginnings</h1>
                </div>
                <div className="c-header__bgContainer">
                    <img className="c-header__bgImage" src={header} />
                </div>
                <div className="c-header__grabber">
                May X, 2018
                </div>
            </header>
        );
    }

}

export default Header;