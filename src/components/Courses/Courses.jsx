import { useCallback, useEffect, useState } from 'react';
import { mockedCoursesList } from '../../constants';

import IF from '../../common/IF/IF';
import StyledList from '../../common/StyledList/StyledList';
import StyledLink from '../../common/StyledLink/StyledLink';
import StyledWrapper from '../../common/StyledWrapper/StyledWrapper';
import SearchBar from '../../components/Courses/components/SearchBar/SearchBar';
import styled from 'styled-components';

const Courses = () => {
	useEffect(() => {
		setCoursesList(mockedCoursesList);
		setFilteredCoursesList(mockedCoursesList);
	}, []);
	const [coursesList, setCoursesList] = useState([]);
	const [filteredCoursesList, setFilteredCoursesList] = useState([]);
	const [searchType, setSearchType] = useState('title');
	const handleSelect = ({ target: { value } }) => {
		setSearchType(value);
	};
	const handleFilter = ({ target: { value } }) => {
		if (value.length === 0) {
			setFilteredCoursesList(coursesList);
			return;
		}
		if (searchType === 'title') {
			setFilteredCoursesList(
				filteredCoursesList.filter(({ title }) => title.includes(value))
			);
		} else {
			setFilteredCoursesList(
				filteredCoursesList.filter(({ id }) => id.includes(value))
			);
		}
	};
	function debounce(func, timeout = 300) {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				func.apply(this, args);
			}, timeout);
		};
	}
	const debounceHandler = debounce(handleFilter, 500);

	return (
		<StyledWrapper direction={'column'} margin={'0 0 40px 0'}>
			<StyledWrapper margin={'40px 200px'} justifyContent={'space-between'}>
				<SearchBar onChange={handleSelect} onFilter={debounceHandler} />
				<StyledLink buttonText={'Add new course'} to={'/create-course'} />
			</StyledWrapper>
			<IF condition={filteredCoursesList.length === 0}>
				<StyledParagpraph>Here is no courses yet</StyledParagpraph>
			</IF>
			<IF condition={filteredCoursesList.length !== 0}>
				<StyledList coursesList={filteredCoursesList} />
			</IF>
		</StyledWrapper>
	);
};

export default Courses;

const StyledParagpraph = styled.p`
	text-align: center;
`;
