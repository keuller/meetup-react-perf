import { Link } from 'inferno-router'

function Resume(props) {
    return (
        <div className="row">
            <div className="col-xs-3">&nbsp;</div>
            <div className="col-xs-6">
                <p>&nbsp;</p>
                <div className="card">
                    <div className="card-block">
                        <h4 className="card-title text-xs-center">Resume</h4>
                        <hr/>
                        <p className="card-text text-xs-center">
                            Congratulations {props.params.name}!
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

export default Resume
