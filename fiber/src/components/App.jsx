import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import AppBar from 'components/AppBar'
import SimpleForm from 'components/SimpleForm'
import Resume from 'components/Resume'
import TablePerf from 'components/TablePerf'
import About from 'components/About'

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <div>
                    <AppBar />
                    <br/>
                    <div className="container">
                        <Route exact path="/" component={SimpleForm} />
                        <Route path="/resume/:name" component={Resume} />
                        <Route path="/table" component={TablePerf} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        )
    }

}

export default App
