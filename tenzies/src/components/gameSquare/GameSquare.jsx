import { useState } from 'react'
import Dice from '../dice/Dice'
import Button from '../button/Button'
import './gamesquare.css'

const GameSquare = () => {
	function allNewDice() {
		const newDice = []
		for (let i = 0; i < 10; i++) {
			newDice.push({ value: Math.ceil(Math.random() * 6), isHeld: false })
		}
		return newDice
	}
	function rollDice() {
		setDice(allNewDice())
	}

	const [dice, setDice] = useState(allNewDice)
	const diceArray = dice.map((die) => <Dice value={die.value} />)
	console.log(allNewDice())
	return (
		<div className="gamesquare">
			<div className="dice-container">{diceArray}</div>
			<Button handleClick={rollDice} />
		</div>
	)
}

export default GameSquare
