import { createElement, PureComponent } from 'rax';
import Router from 'router'
import routes from 'routes'
import history from 'util/history'

import AppBar from 'components/AppBar'

class App extends PureComponent {

  render() {
    return (
      <div>
        <AppBar />
        <div className="container">
          <Router history={history} routes={routes}></Router>
        </div>
      </div>
    )
  }

}

export default App
