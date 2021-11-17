import React from "react";

class CompanyRegistationC extends React.Component {
	render() {
		return (
			<>
				<li className="classLiDescricao">
					<span>{this.props.typeDescricao}</span>
				</li>
				<li className="classLiInput">
					<input className="classInput" type={this.props.typeInput}></input>
				</li>
			</>
		);
	}
}

export default CompanyRegistationC;
