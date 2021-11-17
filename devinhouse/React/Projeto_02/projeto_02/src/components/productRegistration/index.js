import React from "react";

class productRegistationC extends React.Component {
	render() {
		return (
			<>
				<li className="classLiSpan" class="classLi">
					<span>{this.props.descricao}</span>
				</li>
				<li class="classLi">
					<input className="classInput" type={this.props.typeInput}></input>
				</li>
			</>
		);
	}
}

export default productRegistationC;
