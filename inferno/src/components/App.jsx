// @flow

import Inferno from 'inferno'
import AppBar from 'components/AppBar'

function App(props: Object) {
    return (
        <div>
            <AppBar />
            <br/>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default App
