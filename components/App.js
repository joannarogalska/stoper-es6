class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            listTime: [],
        };
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

    reset() {
        this.state.listTime.push(this.state.times);
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            listTime: this.state.listTime
        })
    }

    resetTimer = () => {
        this.stop();
        this.reset();
    };

    clean = () => {
        this.setState({
            listTime: []
        })
    };

    render() {
        return (
            <div>
                <nav className="controls">
                    <a href="#" className="button" onClick={this.start}>Start</a>
                    <a href="#" className="button" onClick={this.stop}>Stop</a>
                    <a href="#" className="button" onClick={this.resetTimer}>Reset</a>
                    {this.state.listTime.length > 0 &&
                        < a href="#" className="button" onClick={this.clean}>Clean</a>
                    }
                </nav>
                <Stopwatch time={format(this.state.times)}/>
                <List listTime={this.state.listTime} />
            </div>
        );
    }
}
