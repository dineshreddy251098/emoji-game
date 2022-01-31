import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickedPlayAgain} = props
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const greetingOnResult = score === 12 ? 'You Won' : 'You Lose'
  const scoreHeading = score === 12 ? 'Best Score' : 'Score'

  const playAgain = () => {
    onClickedPlayAgain()
  }

  return (
    <div className="win-lose-container">
      <img className="result-image" src={imgUrl} alt="win or lose" />
      <div className="result-display-container">
        <h1 className="greetings">{greetingOnResult}</h1>
        <p className="score-heading">{scoreHeading}</p>
        <p className="score-display">{score}/12</p>
        <button className="play-again-btn" onClick={playAgain} type="button">
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLoseCard
