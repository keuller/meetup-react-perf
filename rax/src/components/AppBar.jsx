import { createElement, PureComponent } from 'rax';
import NavItem from 'components/NavItem'

class AppBar extends PureComponent {

    render() {
        return (
            <nav className="navbar navbar-dark orange accent-4">
                <div className="collapse navbar-toggleable-xs">
                    <a className="navbar-brand" href="#">Rax Case</a>
                    <ul className="nav navbar-nav"></ul>
                    <ul className="nav navbar-nav float-xs-right">
                        <NavItem to="#/table">Table</NavItem>
                        <NavItem to="#/about">About</NavItem>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default AppBar
