const dateGenerator = (date) => {
	const dateArr = date
		.split('/')
		.map((elem) => (elem.length <= 1 ? '0' + elem : elem));

	return dateArr.join('.');
};

export default dateGenerator;
