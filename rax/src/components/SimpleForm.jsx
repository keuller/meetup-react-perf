import { createElement, Component } from 'rax'
import Bench from 'util/bench'

const bench = new Bench()

class SimpleForm extends Component {

    constructor(props) {
        super(props)
        this.state = { name: '' }
    }

    componentDidMount() {
        bench.stop()
    }

    componentDidUpdate() {
        bench.stop()
    }

    onNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    onNextHandler = (e) => {
        e.preventDefault()
        if (this.state.name === '') return
        this.props.router.push(`/resume/${this.state.name}`)
    }

    shouldComponentUpdate(props, state) {
        return false
    }

    render() {
        bench.start('simple_form')
        return (
            <div className="row">
                <div className="col-xs-3">&nbsp;</div>
                <div className="col-xs-6">
                    <p>&nbsp;</p>
                    <div className="card card-block">
                        <h4 className="card-title text-xs-center">Welcome!</h4>
                        <br/>
                        <div className="md-form">
                            <i className="fa fa-user prefix"></i>
                            <input type="text" className="form-control" 
                                onInput={this.onNameChange} maxLength="30" />
                            <label>Your Name</label>
                        </div>

                        <div className="text-xs-center">
                            <button className="btn btn-primary" onClick={this.onNextHandler}>Next</button>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3">&nbsp;</div>
            </div>
        )
    }
}

// SimpleForm.contextTypes = {
//     router: React.PropTypes.object
// }

export default SimpleForm
