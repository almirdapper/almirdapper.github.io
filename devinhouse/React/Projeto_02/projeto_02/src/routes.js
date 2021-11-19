import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import CompanyRegistation from "./pages/companyRegistation";
import Map from "./pages/map";
import ProducttTegistration from "./pages/productRegistration";
class Rotas extends React.Component {
	render() {
		return (
			<Routes>
				<Route exact path="/" component={Login}></Route>

				<Route exact path="/Map" component={Map}></Route>

				<Route
					exact
					path="/CompanyRegistation"
					component={CompanyRegistation}
				></Route>

				<Route
					exact
					path="/ProducttTegistration"
					component={ProducttTegistration}
				></Route>
			</Routes>
		);
	}
}

export default Rotas;
