import React from 'react'

const logoStyle = {
    marginTop: '5px',
    width: '108px',
    height: '108px'
}

function Logo(props) {
    return (
        <div style={logoStyle}>
            <img src="assets/img/react.png" />
        </div>
    )
}

export default Logo
