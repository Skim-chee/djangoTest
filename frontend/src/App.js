import React, { Component } from 'react';
import './App.css';
import ProfileHome from './ProfileHome/ProfileHome';
import Loading from './ProfileHome/Loading';
import FavoriteShows from './ProfileHome/FavoriteShows';

class App extends Component {
	constructor() {
		super();

		this.state = {
			data: null,
			shows: []
		};
	}

	// Sets data to true once show data is loaded
	addFavoriteShows = favoriteShows => {
		this.setState((prevState, props) => {
			return {
				data: true,
				shows: [...prevState.shows, favoriteShows]
			};
		});
	};

	render() {
		return (
			<div className="container">
				<ProfileHome userId="1" addFavoriteShows={this.addFavoriteShows}>
					{this.state.data === null 
						? <Loading />
						: <FavoriteShows shows={this.state.shows} />}
				</ProfileHome>
			</div>
		);
	}
}

export default App;
