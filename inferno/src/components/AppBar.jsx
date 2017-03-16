
import Inferno from 'inferno'
import NavItem from 'components/NavItem'

function AppBar(props) {
    return (
        <nav className="navbar navbar-dark red lighten-1">
            <div className="collapse navbar-toggleable-xs">
                <a className="navbar-brand" href="#">Inferno Case</a>
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
