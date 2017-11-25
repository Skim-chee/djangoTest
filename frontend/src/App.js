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

	addFavoriteShows = favoriteShows => {
		this.setState({
			data: true,
			shows: [...this.state.shows, favoriteShows]
		});
	};

	render() {
		return (
			<ProfileHome userId="1" addFavoriteShows={this.addFavoriteShows}>
				{this.state.data === null ? (
					<Loading />
				) : (
					<FavoriteShows shows={this.state.shows} />
				)}
			</ProfileHome>
		);
	}
}

export default App;
