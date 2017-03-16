// @flow
import Inferno from 'inferno'
import Component from 'inferno-component'
import { Link } from 'inferno-router'
import Logo from 'components/Logo'
import Bench from 'util/bench'

const bench = new Bench()

class About extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        bench.stop()
    }
    
    componentDidUpdate() {
        bench.stop()
    }

    render() {
        bench.start('about')
        return (
            <div className="row">
                <div className="col-xs-3">&nbsp;</div>
                <div className="col-xs-6">
                    <p>&nbsp;</p>
                    <div className="card about-card">
                        <div class="card-up danger-color"></div>
                        <div className="avatar">
                            <Logo/>
                        </div>
                        <div className="card-block">
                            <h4 className="card-title text-xs-center">About</h4>
                            <hr/>
                            <p className="card-text text-xs-center">
                            Hello Guys! This is a simple application built with <a href="https://infernojs.org" target="_inferno">InfernoJS</a>.
                            </p>
                            <div className="text-xs-center">
                                <Link to="/">Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default About