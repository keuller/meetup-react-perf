
function Bench() {
    this.startTime = null
    this.lastMeasure = null
    this.lastValue = 0
}

Bench.prototype.start = function(name) {
    this.startTime = performance.now()
    this.lastMeasure = name
    this.lastValue = 0
}

Bench.prototype.delay = function(cb, milliseconds) {
    window.setTimeout(cb, milliseconds)
}

Bench.prototype.stop = function(cb) {
    let last = this.lastMeasure
    if (this.lastMeasure) {
        this.delay(() => {
            this.lastMeasure = null
            this.lastValue = (performance.now() - this.startTime)
            console.log(last + ' took ' + this.lastValue)
            if (cb) { cb(this.lastValue) }
        }, 0)
    }
}

export default Bench
