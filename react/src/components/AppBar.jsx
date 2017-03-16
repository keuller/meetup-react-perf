import React from 'react'
import NavItem from 'components/NavItem'

function AppBar(props) {
    return (
        <nav className="navbar navbar-dark blue accent-3">
            <div className="collapse navbar-toggleable-xs">
                <a className="navbar-brand" href="#">React Case</a>
                <ul className="nav navbar-nav"></ul>
                <ul className="nav navbar-nav float-xs-right">
                    <NavItem to="/table">Table</NavItem>
                    <NavItem to="/about">About</NavItem>
                </ul>
            </div>
        </nav>
    )
}

export default AppBar
