import { createElement } from 'rax'

function Link(props) {
    if (!props.to) throw new Error('Property "to" cannot be null.')
    return <a className={props.className} href={props.to}>{props.children}</a>
}

export default Link
