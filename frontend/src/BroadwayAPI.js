import axios from 'axios';

// Function takes in users id, returns an array of promises that 
// will resolve to user's favorite shows
export const getFavoriteShowsByUserId = userId => {
	// Makes request to database with inputted userId
	const request = axios.get(`http://localhost:8000/users/${userId}`)
	// Returns the overall promise 
	return request
		.then(function(response) {
			// Makes request to obtain users favorite shows
			const results = getFavoriteShows(response.data.favorites);
			
			// Returns the array of promises getting the users favorite shows back up to function call
			return results;
		})
};

// Takes a list of user's favorite shows, returns a list of promises containing the 
// shows' details
const getFavoriteShows = shows => {
	let promises = [];

	// Creates array of promises 	
	shows.forEach(show => {
		promises.push(axios.get(show));
	});

	// Returns the array of promises back up to getFavoriteShowsByUserId
	return promises;
};
