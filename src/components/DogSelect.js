import React from 'react';

class DogSelect extends React.Component {
	
	render() {
		return (
			<select onChange={this.props.applyChanges}>
				<option value = {this.props.dogsList[0]}>{this.props.dogsList[0]}</option>
	        	<option value = {this.props.dogsList[1]}>{this.props.dogsList[1]}</option>
	        	<option value = {this.props.dogsList[2]}>{this.props.dogsList[2]}</option>
			</select>
		);
	}
}

export default DogSelect;