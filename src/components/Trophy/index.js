import './index.css'

const Trophy = props => {
  const {score, resetGame} = props
  const reset = () => {
    resetGame()
  }
  return (
    <div className="trophy-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p>Your Score</p>
      <p>{score}</p>
      <button type="button" className="playagain" onClick={reset}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-icon"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default Trophy
