import React from "react";
import PropTypes from "prop-types";

class ControlItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: this.props.value };
	}

	handlePlus = () => {
		this.setState({ value: this.props.value + 1 });
	};

	handleMinus = () => {
		this.setState({ value: this.props.value - 1 });
	};

	render() {
		return (
			<div>
				<li>
					<button onClick={this.handlePlus}>+</button>
					<span>
						{this.state.value} | {this.props.title}
					</span>
					<button onClick={this.handleMinus}>-</button>
				</li>
			</div>
		);
	}
}

ControlItem.propTypes = {
	value: PropTypes.number,
	title: PropTypes.string,
};
export default ControlItem;
