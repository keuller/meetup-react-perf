// @flow

import Inferno, { render } from 'inferno'
import { Router, Route, IndexRoute } from 'inferno-router'
import history from 'util/history'

import App from 'components/App'
import SimpleForm from 'components/SimpleForm'
import TablePerf from 'components/TablePerf'
import About from 'components/About'
import Resume from 'components/Resume'

const routes = (
    <Router history={history}>
        <Route component={App}>
            <IndexRoute component={SimpleForm} />
            <Route path="/table" component={TablePerf} />
            <Route path="/about" component={About} />
            <Route path="/resume/:name" name="resume" component={Resume} />
        </Route>
    </Router>
)

render(routes, document.querySelector('#app'))
