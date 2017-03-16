import { h } from 'preact'

function NavItem(props) {
    return (
        <li class="nav-item">
            <a class="nav-link" href={props.to}>{props.children}</a>
        </li>
    )
}

export default NavItem
