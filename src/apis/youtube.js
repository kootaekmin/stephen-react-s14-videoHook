import axios from 'axios';

const KEY = 'AIzaSyCzYFNxDZJ-fB3WKmGc98fngPzSc4D8sL0';

export default axios.create({
	baseURL: `https://www.googleapis.com/youtube/v3`,
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
		type: 'video',
	},
});
