import React from "react";
import Pokemon from "../../components/Pokemon";
import DATA from "../../assets/pokemon";
import Header from "../../components/Header";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemons: [],
			loading: true,
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				pokemons: DATA,
				loading: false,
			});
		}, 3000);
	}

	handleChange = (evt) => {
		const text = evt.target.value;
		console.log(evt.target.value);
		const filterData = DATA.filter((pokemon) => {
			return pokemon.name.english.toLowerCase().includes(text.toLowerCase());
		});
		this.setState({
			pokemons: filterData,
		});
	};

	selectPokemon = (pokemon, evt) => {
		console.log({ pokemon });
	};

	render() {
		return (
			<div className="container-pokemon">
				<Header title="Pokedex" />
				<input
					type="text"
					className="input-pesquisa"
					onChange={this.handleChange}
				/>

				{this.state.loading && "Loading..."}
				{!this.state.loading &&
					this.state.pokemons.map((item) => (
						<Pokemon
							key={item.id}
							name={item.name.english}
							photo={item.image}
							types={["grass", "fire", "water"]}
							attack={item.base.Attack}
							hp={item.base.HP}
							defense={item.base.Defense}
							typesCor={item.type}
							onClick={(e) => this.selectPokemon(item, e)}
						/>
					))}
			</div>
		);
	}
}

export default Home;
