
import './button.css'

const Button = ({ handleClick }) => {
	return (
		<>
			<button onClick={handleClick} className="btn">
				Roll
			</button>
		</>
	)
}

export default Button