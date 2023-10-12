import './index.css'

const CharacterItem = props => {
  const {characterDetails} = props
  const {name, count} = characterDetails

  return (
    <li className="item">
      <p className="character-count">
        {name}: {count}
      </p>
    </li>
  )
}
export default CharacterItem
