export function handleBgPokemon(typesCor) {
	switch (typesCor) {
		case "Fire":
			return "#FF0000";

		case "Grass":
			return "#00FF00";

		case "Water":
			return "#0000FF";

		default:
			return "#CCC";
	}
}
