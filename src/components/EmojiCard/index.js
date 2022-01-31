import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const clickEmoji = () => {
    onClickedEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button onClick={clickEmoji} className="emoji-button" type="button">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
