import { Link } from 'inferno-router'

function NavItem(props) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={props.to}>{props.children}</Link>
        </li>
    )
}

export default NavItem
