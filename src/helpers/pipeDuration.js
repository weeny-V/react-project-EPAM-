const pipeDuration = (duration) => {
	if (duration < 60) {
		return duration + ' minutes';
	} else {
		let hours = parseInt(`${duration / 60}`).toString();
		let minutes = (duration % 60).toString();

		if (hours.length <= 1) {
			hours = '0' + hours;
		}
		if (minutes.length <= 1) {
			minutes = '0' + minutes;
		}

		return `${hours}:${minutes} hours`;
	}
};

export default pipeDuration;
