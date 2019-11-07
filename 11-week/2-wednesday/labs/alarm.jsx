class Alarm extends Component {
  constructor() {
    super();
    // new Date(year, month, day, hours, minutes, seconds, milliseconds);
    this.state = {
      dateTime: new Date(2019, 11, 07, 9, 15)
    }
  }

  componentDidMount() {
    setInterval(() => {
      // check if time now is time of alarm
      if (new Date() > this.state.dateTime) {
        // show message, end alarm (clear interval)
      }
    }, 1000)
  }

  render() {
    return (
      <>
        <h1>Alarm</h1>

      </>
    )
  }
}