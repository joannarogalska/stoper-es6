class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        };
    }


    pad0(value) {
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;
    }

    reset() {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        })
    }


    format(times) {
        return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
    }

    start = () => {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    };

    step() {
        if (!this.running) return;
        this.calculate();
        this.setState({
            times: this.state.times
        })
    }


    calculate() {
        this.state.times.miliseconds += 1;
        if (this.state.times.miliseconds >= 100) {
            this.state.times.seconds += 1;
            this.state.times.miliseconds = 0;
        }
        if (this.state.times.seconds >= 60) {
            this.state.times.minutes += 1;
            this.state.times.seconds = 0;
        }
    }

    stop = () => {
        this.running = false;
        clearInterval(this.watch);
    };

    resetTimer = () => {
        this.stop();
        let span = document.querySelector('.results');
        var li = document.createElement('li');              // Create a <li> element
        var time = document.createTextNode(this.format(this.state.times));     // Create a text node
        li.appendChild(time);
        span.appendChild(li);
        this.reset();
        let cleanButton = document.getElementById('clean');
        cleanButton.classList.remove('hide');
    };

    clean = () => {
        let span = document.querySelector('.results');
        let li = span.querySelector('li');
        span.querySelectorAll('li').forEach(function(li) {
            span.removeChild(li);
        });

    };

    render() {
        return (
            <div>
                <nav className="controls">
                    <a href="#" className="button" onClick={this.start}>Start</a>
                    <a href="#" className="button" onClick={this.stop}>Stop</a>
                    <a href="#" className="button" onClick={this.resetTimer}>Reset</a>
                    <a href="#" className="button hide" id="clean" onClick={this.clean}>Clean</a>
                </nav>
                <Stopwatch time={this.format(this.state.times)}/>
                <List />
            </div>
        );
    }
}
