import { createElement, Component } from 'rax'
import toRegex from 'path-to-regexp'

function extractHash(path) {
    if (path == '') return '/'
    if (path.charAt(0) == '#') return path.substr(1)
    return path
}

class Router extends Component {

    constructor(props) {
        super(props)
        this.state = { current: null }
        // create pattern cache
        this.routes = props.routes.map(route => {
            let keys = []
            let pattern = toRegex(route.path, keys)
            return Object.assign({}, route, { keys, pattern })   
        })
    }

    matchUri(route, uri) {
        let { pattern, keys } = route
        let match = pattern.exec(uri)
        if (!match) return null

        let params = Object.create({})
        for(let i = 1; i < match.length; i++) {
            params[keys[i - 1].name] = (match[i] !== undefined ? match[i] : undefined)
        }

        return { 
            params, 
            component: route.component
        }
    }

    componentDidMount() {
        this.props.history.listen((location) => {
            this.setState({ current: extractHash(location.hash) })
        })
    }

    render() {
        let uri = extractHash(window.location.hash) || '/'
          , view = null

        // improve match algorithm
        for (let route=0; route < this.routes.length; route++) {
            view = this.matchUri(this.routes[route], uri)
            if (view) break
        }

        return (view ? createElement(view.component, { router: this.props.history, params: view.params }) : null)
    }

}

export default Router
