import React from 'react';
import './Styles.css';

const FavoriteShows = props => {
	return (
		<div className="favoriteShows"> 
			{props.shows
				// Filters out broadway shows
				.filter(data => data['category'] === "broadway")
				// Displays each show
				.map(data => (
					<span key={data['title']} className="favoriteShows__show">
						<div className="favoriteShows__title-contain">
							<h1 className="favoriteShows__title">{data['title']}</h1>
						</div>
					</span>
			))} 
		</div>
	);
}

export default FavoriteShows;
