import { h, Component } from 'preact'
import { Table } from 'components/TableDetail'
import contacts from 'state/contacts'
import Bench from 'util/bench'

const bench = new Bench()
const TIMES = 15

class TablePerf extends Component {

    constructor(props) {
        super(props)
        this.state = contacts.state()
        this.count = 1
        this.totalLoad = 0
    }

    onClear = (e) => {
        this.setState(contacts.clear())
    }

    onLoad = (e) => {
        this.setState(contacts.load())
    }

    componentDidMount() {
        this.bench = setInterval(() => {
            this.count = this.count + 1
            bench.delay(() => this.setState(contacts.load()), 10)
            bench.delay(() => this.setState(contacts.clear()), 50)
            if (this.count > TIMES) {
                clearInterval(this.bench)
                bench.delay(() => console.log('Average Load:', (this.totalLoad / TIMES).toFixed(2), 'ms'), 100)
            }
        }, 750)
    }

    componentDidUpdate() {
        let isLoad = this.state.contacts.length > 0
        if (isLoad)
            bench.stop((renderTime) => {
                this.totalLoad = this.totalLoad + renderTime
            })
        else
            bench.stop()        
    }

    render(props, state) {
        bench.start('table_perf')
        return (
            <div class="row">
                <button class="btn btn-secondary" disabled={state.contacts.length > 1} onClick={this.onLoad}>Load</button>
                <button class="btn unique-color" disabled={state.contacts.length < 1} onClick={this.onClear}>Clear</button>
                
                <div>
                    <Table data={state.contacts}></Table>
                </div>
            </div>
        )
    }

}

export default TablePerf
