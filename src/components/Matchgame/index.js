import {Component} from 'react'
import AllItems from '../AllItems'
import Trophy from '../Trophy'
import './index.css'

class Matchgame extends Component {
  intervalId = null

  constructor(props) {
    super(props)
    const {imagesList} = props
    this.state = {
      count: 60,
      largeImagedetails: imagesList[0],
      score: 0,
      isGameover: false,
    }
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  startTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.count === 0) {
          this.setState({isGameover: true})
          return {count: 0}
        }
        return {count: prevState.count - 1}
      })
    }, 1000)
  }

  resetGame = () => {
    const {imagesList} = this.props
    this.setState({
      count: 60,
      largeImagedetails: imagesList[0],
      score: 0,
      isGameover: false,
    })
    this.startTimer()
  }

  matchGamechange = id => {
    const {largeImagedetails} = this.state
    const isCorrect = largeImagedetails.id === id
    if (isCorrect) {
      const randomValue = Math.floor(Math.random() * 31)
      const {imagesList} = this.props
      const newlargeImagedetails = imagesList[randomValue]
      this.setState({largeImagedetails: newlargeImagedetails})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      clearInterval(this.intervalId)
      this.setState({
        isGameover: true,
      })
    }
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {count, largeImagedetails, score, isGameover} = this.state
    return (
      <div className="bg-container">
        <div className="header-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="logo"
            />
          </div>
          <ul className="score-card">
            <p className="score">
              Score: <span className="score-value">{score}</span>
            </p>
            <li className="timer-clock">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-logo"
              />
              <p className="score-value">{count} sec</p>
            </li>
          </ul>
        </div>
        <div className="body-container">
          {!isGameover && (
            <>
              <img
                src={largeImagedetails.imageUrl}
                alt="match"
                className="large-image"
              />
              <AllItems
                tabsList={tabsList}
                imagesList={imagesList}
                matchGamechange={this.matchGamechange}
              />
            </>
          )}
          {isGameover && <Trophy score={score} resetGame={this.resetGame} />}
        </div>
      </div>
    )
  }
}

export default Matchgame
