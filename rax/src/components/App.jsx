import { createElement, PureComponent } from 'rax';
import Router from 'router'
import routes from 'routes'
import createHashHistory from 'history/createHashHistory'

import AppBar from 'components/AppBar'

class App extends PureComponent {

  render() {
    return (
      <div>
        <AppBar />
        <div className="container">
          <Router history={createHashHistory()} routes={routes}></Router>
        </div>
      </div>
    )
  }

}

export default App
