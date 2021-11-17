import React from "react";
import LoginC from "../../components/login";

import { Link } from "react-router-dom";

class Login extends React.Component {
	/*constructor(props) {
		super(props);
		this.state = {
			loading: true,
			acesso: [],
		};
	}

	componentDidMount() {
		setTimeout(() =>{
			this.setState({loading:false,
			})
		},3000)

	}*/

	render() {
		return (
			<>
				<div className="classLogin">
					<h1>Login</h1>
					<ul>
						<LoginC descricaoInput="E-mail" typeInput="text" />

						<LoginC descricaoInput="Senha" typeInput="password" />
					</ul>
					<Link to="/product">
						<button>Sing In</button>
					</Link>
				</div>
			</>
		);
	}
}

export default Login;
