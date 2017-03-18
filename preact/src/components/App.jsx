import { h } from 'preact'
import Router from 'preact-router'
import AppBar from 'components/AppBar'
import About from 'components/About'
import SimpleForm from 'components/SimpleForm'
import TablePerf from 'components/TablePerf'
import Resume from 'components/Resume'
import createHashHistory from 'history/createHashHistory'

const history = createHashHistory()

function App(props) {
    return (
        <div>
            <AppBar />
            <br/>
            <div className="container">
                <Router history={history}>
                    <SimpleForm path="/" />
                    <Resume path="/resume/:name?" />
                    <TablePerf path="/table" />
                    <About path="/about" />
                </Router>
            </div>
        </div>
    )
}

export default App
