import { useState } from 'react'
import Dice from '../dice/Dice'
import Button from '../button/Button'
import './gamesquare.css'

const GameSquare = () => {

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push(Math.ceil(Math.random() * 6))
    }
		return newDice
	}
  function rollDice(){
    setDice(allNewDice())
  }

  const [dice, setDice] = useState(allNewDice)
  const diceArray = dice.map(die => <Dice value={die} />)
	console.log(allNewDice())
  return (
		<div className="gamesquare">
			<div className="dice-container">
				{diceArray}
			</div>
      <Button handleClick={rollDice} />
		</div>
	)
}

export default GameSquare