import { h } from 'preact'

const logoStyle = {
    marginTop: '5px',
    marginLeft: '5px',
    width: '96px',
    height: '96px'
}

function Logo(props) {
    return (
        <div style={logoStyle}>
            <img src="assets/img/preact.jpg" />
        </div>
    )
}

export default Logo
