import React from "react";
import "./styleMap.css";
import Maps from "../../components/map";
import { Link } from "react-router-dom";

class Map extends React.Component {
	render() {
		return (
			<>
				<div className="ContainerMap">
					<div className="maps">
						<Link to="/CompanyRegistation">
							<button className="classButtonMaps">Cadastro Empresa</button>
						</Link>
						<Link to="/ProducttTegistration">
							<button className="classButtonMaps">Cadastro Produto</button>
						</Link>
						<Link to="/">
							<button className="classButtonMaps">Cadastro Usuário</button>
						</Link>
						<Link to="/">
							<button className="classButtonMapsSair">Sair</button>
						</Link>
						<Maps />
					</div>
				</div>
			</>
		);
	}
}

export default Map;
