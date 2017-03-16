import { h } from 'preact'
import NavItem from 'components/NavItem'

function AppBar(props, state) {
    return (
        <nav class="navbar navbar-dark deep-purple">
            <div class="collapse navbar-toggleable-xs">
                <a class="navbar-brand" href="#">Preact Case</a>
                <ul class="nav navbar-nav"></ul>
                <ul class="nav navbar-nav float-xs-right">
                    <NavItem to="/table">Table</NavItem>
                    <NavItem to="/about">About</NavItem>
                </ul>
            </div>
        </nav>
    )
}

export default AppBar
