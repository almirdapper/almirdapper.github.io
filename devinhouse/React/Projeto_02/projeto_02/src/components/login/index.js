import React from "react";
import PropTypes from "prop-types";

class Login extends React.Component {
	render() {
		return (
			<>
				<li className="classSpanLi">
					<span>{this.props.descricaoInput}</span>
				</li>

				<li>
					<input className={"inputLogin"} type={this.props.typeInput}></input>
				</li>
			</>
		);
	}
}

Login.propTypes = {
	descricaoInput: PropTypes.string.isRequired,
	typeInput: PropTypes.string.isRequired,
};

export default Login;
