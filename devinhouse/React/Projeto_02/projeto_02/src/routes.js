import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Product from "./pages/product";
import Company from "./pages/company";
import Map from "./pages/map";

class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<Router>
					<Switch>
						<Route exact patch="/">
							<Login />
						</Route>

						<Route exact patch="/product">
							<Product />
						</Route>

						<Route exact patch="/company">
							<Company />
						</Route>

						<Route exact patch="/map">
							<Map />
						</Route>
					</Switch>
				</Router>
			</>
		);
	}
}

export default Routes;
