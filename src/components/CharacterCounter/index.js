import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

import CharacterItem from '../CharacterItem'
import './index.css'

class CharacterCounter extends Component {
  state = {userInput: '', characterList: []}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSubmitChar = event => {
    event.preventDefault()
    const {userInput} = this.state
    const count = userInput.length
    const newCharCount = {
      id: uuidV4(),
      name: userInput,
      count,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, newCharCount],
      userInput: '',
    }))
  }

  render() {
    const {userInput, characterList} = this.state
    const charLength = characterList.length
    return (
      <div className="app-container">
        <div className="character-count-card-container">
          <div className="count-card-container">
            <h1 className="count-heading">
              Count the Characters like a Boss...
            </h1>
            <ul className="character-list">
              {charLength > 0 ? (
                characterList.map(eachItem => (
                  <CharacterItem
                    key={eachItem.id}
                    characterDetails={eachItem}
                  />
                ))
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="no-count-img"
                />
              )}
            </ul>
          </div>
          <div className="input-card-container">
            <h1 className="input-heading">Character Counter</h1>
            <form className="input-card" onSubmit={this.onSubmitChar}>
              <input
                type="text"
                value={userInput}
                className="input"
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default CharacterCounter
