import React from "react";
import ControlItem from "./components/ControlItem";

const CONTROL_ITEMS = [
	{ value: 100, title: "Volume" },
	{ value: 80, title: "Treble" },
	{ value: 65, title: "Mid" },
	{ value: 87, title: "Bass" },
];

class App extends React.Component {
	render() {
		return (
			<div>
				<ul>
					{CONTROL_ITEMS.map((item) => (
						<ControlItem value={item.value} title={item.title} />
					))}
				</ul>
			</div>
		);
	}
}

export default App;
