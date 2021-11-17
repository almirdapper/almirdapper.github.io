import React from "react";
import PropTypes from "prop-types";
import { handleBgPokemon } from "../../utils";

class Pokemon extends React.Component {
	render() {
		const typePokemon = handleBgPokemon(this.props.typesCor[0]);

		return (
			<div>
				<div
					className="pokemon"
					style={{ background: typePokemon }}
					onClick={this.props.onClick}
				>
					{!this.props.photo && (
						<img
							className="pokemon-image"
							src="https://i2.wp.com/img1.wikia.nocookie.net/__cb20130121005312/pokei/es/images/d/d2/Pokebola.jpg"
							alt="Poke"
						/>
					)}

					<img
						className="pokemon-image"
						src={this.props.photo}
						alt={this.props.name}
					></img>

					<h2>{this.props.name}</h2>

					<ul className="pokemon-info">
						<li>HP:{this.props.hp}</li>
						<li>Attack: {this.props.attack}</li>
						<li>Defense: {this.props.defense}</li>
					</ul>

					<span>{this.props.types.join(" ")}</span>
				</div>
			</div>
		);
	}
}

Pokemon.prototypes = {
	name: PropTypes.string.isRequired,
	photo: PropTypes.string,
	hp: PropTypes.number.isRequired,
	attack: PropTypes.number.isRequired,
	defense: PropTypes.number.isRequired,
	types: PropTypes.arrayOf(PropTypes.string),
};
export default Pokemon;
