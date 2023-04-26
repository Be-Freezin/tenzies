import { useState } from 'react'
import { nanoid } from 'nanoid'
import Dice from '../dice/Dice'
import Button from '../button/Button'
import './gamesquare.css'

const GameSquare = () => {
	function allNewDice() {
		const newDice = []
		for (let i = 0; i < 10; i++) {
			newDice.push({
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
				id: nanoid(),
			})
		}
		return newDice
	}
	function rollDice() {
		setDice(allNewDice())
	}
	function hold(id) {
		console.log(id)
		setDice(oldDice =>
			oldDice.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die
			})
		)
	}

	const [dice, setDice] = useState(allNewDice)
	const diceArray = dice.map((die) => (
		<Dice
			key={die.id}
			value={die.value}
			isHeld={die.isHeld}
			handleHold={() => hold(die.id)}
		/>
	))
	console.log(allNewDice())
	return (
		<div className="gamesquare">
			<div className="dice-container">{diceArray}</div>
			<Button handleClick={rollDice} />
		</div>
	)
}

export default GameSquare
