import { h } from 'preact'

function Resume({ name }) {
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
                            Congratulations {name}!
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

export default Resume
