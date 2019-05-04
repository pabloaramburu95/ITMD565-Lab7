import React from 'react';
import img from '../images/logo.svg';

// Import the components
import DogImage from './DogImage';
import DogSelect from './DogSelect';

class App extends React.Component {

	// Constructor with initial state and bind functions
	constructor(props) {
		super(props);
		this.state = {
			dogsList:['Husky', 'Chow', 'Bouvier'],
			dogSelected: 'Husky',
			imgUrl: ''
		};
		this.loadImage = this.loadImage.bind(this);
		this.applyChanges = this.applyChanges.bind(this);
	}

	// When the component loads it calls the function to fetch the image.
	componentDidMount() {
		this.loadImage()
	}

	// This method is called when a new dog is selected from the list
	applyChanges(e){
		//this.setState({ dogSelected : e.target.value });
		this.state.dogSelected = e.target.value
		this.loadImage();
	}

	// This method loads a new random image from the API whit the selected dog
	loadImage(){
		console.log("Dog selected ----> " + this.state.dogSelected)

		fetch("https://dog.ceo/api/breed/"+this.state.dogSelected+"/images/random")
		.then(response => response.json())
		.then((imgUrl) => {
			this.setState({
				imgUrl: imgUrl.message
			});
        })
	}


	// This method renders the webpage
  	render() {
  		console.log("aaaa --> " + this.state.imgUrl)
    	return (
    		<div style={{textAlign: 'center'}}>
	    		<h1>{this.state.dogSelected} Dog Image Generator</h1>
	    		<h2> Pablo Aramburu Garcia - paramburugarcia@hawk.iit.edu - ITMD 565</h2>
	    		<p> Please press the button to generate a new random image </p>
	    		<DogSelect applyChanges={this.applyChanges} dogsList={this.state.dogsList} />
	    		<button onClick={this.loadImage}> Load Image </button>
	    		<hr></hr>
				<DogImage src={this.state.imgUrl} alt={this.state.dogSelected} />
	    	</div>
    	);
  	}
}

export default App;