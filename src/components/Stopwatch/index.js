import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0, isRunning: false}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  startTimer = () => {
    const {isRunning} = this.state

    if (!isRunning) {
      this.timerId = setInterval(() => {
        this.setState(prevState => ({time: prevState.time + 1}))
      }, 1000)

      this.setState({isRunning: true})
    }
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isRunning: false})
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({time: 0, isRunning: false})
  }

  formatTime = () => {
    const {time} = this.state

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return `${formattedMinutes}:${formattedSeconds}`
  }

  render() {
    return (
      <div className="bg-container">
        <div className="card">
          <div className="timer-row">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-icon"
            />
            <h1 className="title">Stopwatch</h1>
          </div>

          <h1 className="time">{this.formatTime()}</h1>

          <div className="buttons">
            <button
              type="button"
              className="btn start"
              onClick={this.startTimer}
            >
              Start
            </button>

            <button type="button" className="btn stop" onClick={this.stopTimer}>
              Stop
            </button>

            <button
              type="button"
              className="btn reset"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
