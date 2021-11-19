import React from "react";
import LoginC from "../../components/login";
import "./styleLogin.css";

import { Link } from "react-router-dom";

class Login extends React.Component {
	render() {
		return (
			<>
				<div className="classLogin">
					<h1>Login</h1>
					<ul>
						<LoginC descricaoInput="E-mail" typeInput="text" />

						<LoginC descricaoInput="Senha" typeInput="password" />
					</ul>
					<Link to="/Map">
						<button>Sing In</button>
					</Link>
				</div>
			</>
		);
	}
}

export default Login;
