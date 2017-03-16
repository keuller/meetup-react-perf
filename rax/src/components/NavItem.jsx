import { createElement } from 'rax'
import Link from 'router/Link'

function NavItem(props) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={props.to}>{props.children}</Link>
        </li>
    )
}

export default NavItem
