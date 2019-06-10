import React, {Component} from 'react';

import Input from '../../components/UI/Input/Input'
import CardForm from '../CardForm/CardForm'

import './Main.css';

class Main extends Component {

	state={
		haveCard: false
	}

	isHaveCardHandler(){
		this.setState((prevState) => ({
			haveCard: !prevState.haveCard
		}))
	}

	render() {
		return (
		    <div className="main">

		      	<h1>
		        	Gift Cards
		      	</h1>
		      	
		      	<Input 
		      		type='checkbox' 
		      		label='Do you have a gift card?' 
		      		valid='true'
		      		onChange={() => this.isHaveCardHandler()}
		      	/>

		      	{
		      		this.state.haveCard
			      		? <CardForm />
			      		: null
		      	}
		    </div>	 
  		);
	}
}	

export default Main;
