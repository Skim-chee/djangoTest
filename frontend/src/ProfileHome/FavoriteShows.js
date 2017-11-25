import React from 'react';

const FavoriteShows = props => {
	return (
		<div> 
			{props.shows
				// Filters out broadway shows
				.filter(data => data['category'] === "broadway")
				// Displays each show
				.map(data => (
					<span key={data['title']}>
						{data['title']} - {data['category']}
					</span>
			))} 
		</div>
	);
}

export default FavoriteShows;
