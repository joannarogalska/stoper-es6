class App extends React.Component {

    render() {
        return (
            <div>
                <nav className="controls">
                <a href="#" className="button" id="start">Start</a>
                <a href="#" className="button" id="stop">Stop</a>
                <a href="#" className="button" id="reset">Reset</a>
                <a href="#" className="button hide" id="clean">Clean</a>
            </nav>
                <div className="stopwatch"></div>
                <ul className="results"></ul>
            </div>
        );
    }
}
