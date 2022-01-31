/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'
import './index_copy.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    score: 0,
    topScore: 0,
    playing: true,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickedEmoji = id => {
    const {clickedEmojisList, score} = this.state

    const isAlreadyClicked = clickedEmojisList.some(each => each === id)
    if (isAlreadyClicked === true) {
      this.setState({playing: false})
    } else if (score !== 11) {
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        score: prevState.score + 1,
      }))
    } else {
      this.setState({
        playing: false,
        score: 12,
      })
    }
  }

  onClickedPlayAgain = () => {
    const {score, topScore} = this.state
    const newTopScore = score < topScore ? topScore : score

    this.setState({
      clickedEmojisList: [],
      score: 0,
      playing: true,
      topScore: newTopScore,
    })
  }

  render() {
    const {emojisList} = this.props
    const shuffledEmojisList = this.shuffledEmojisList(emojisList)
    const {score, topScore, playing} = this.state

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} />
        <div className="game-container">
          {playing ? (
            <ul className="emojis-container">
              {shuffledEmojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  onClickedEmoji={this.onClickedEmoji}
                  emojiDetails={eachEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              onClickedPlayAgain={this.onClickedPlayAgain}
              score={score}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
