class List extends React.Component {
    render() {
        return (
            <ul className="results">
                {this.props.listTime.map((time,index) => (
                    <li key={index}>{format(time)}</li>
                ))}
            </ul>
        )
    }
}
