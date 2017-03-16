import { createElement } from 'rax'

const logoStyle = {
    marginTop: '5px',
    width: '108px',
    height: '108px'
}

function Logo(props) {
    return (
        <div style={logoStyle}>
            <img src="assets/img/rax.png" />
        </div>
    )
}

export default Logo
