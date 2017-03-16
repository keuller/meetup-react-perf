import { h, Component } from 'preact'
import Logo from 'components/Logo'
import Bench from 'util/bench'

const bench = new Bench()

class About extends Component {

    componentDidMount() {
        bench.stop()
    }

    componentDidUpdate() {
        bench.stop()
    }

    render(props, state) {
        bench.start('about')
        return (
            <div className="row">
                <div className="col-xs-3">&nbsp;</div>
                <div className="col-xs-6">
                    <p>&nbsp;</p>
                    <div className="card about-card">
                        <div class="card-up deep-purple darken-3"></div>
                        <div className="avatar">
                            <Logo/> 
                        </div>
                        <div className="card-block">
                            <h4 className="card-title text-xs-center">About</h4>
                            <hr/>
                            <p className="card-text text-xs-center">
                            Hello Guys! This is a simple application built with <a href="https://preactjs.com" target="_preact">Preact</a>.
                            </p>
                            <div className="text-xs-center">
                                <a href="/">Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default About
