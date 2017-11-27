import React, { Component } from 'react';
import { getFavoriteShowsByUserId } from '../BroadwayAPI';

class ProfileHome extends Component {
	constructor(props) {
		super(props);

		this.getFavoriteShowsByUserId = getFavoriteShowsByUserId.bind(this);
	}

	componentDidMount() {
		getFavoriteShowsByUserId(this.props.userId)
			.then(response => {
				// Loops through retrieved array of promises and returns individual promises
				response.forEach(showPromise => {
					showPromise
						.then(response=> {
							// Adds favorite shows to state
							// this.setState({ favoriteShows: [...this.state.favoriteShows, response.data] });		
							this.props.addFavoriteShows(response.data);
						})	
				});
			});
	}	

	render() {
		return <div> {this.props.children} </div>;
}
};

export default ProfileHome;
