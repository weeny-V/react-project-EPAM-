import styled from 'styled-components';

import CourseCard from '../../components/Courses/components/CourseCard/CourseCard';

const StyledList = ({ coursesList }) => (
	<List>
		{coursesList.map(
			({ id, title, description, creationDate, duration, authors }) => (
				<CourseCard
					key={id}
					title={title}
					description={description}
					createdDate={creationDate}
					duration={duration}
					authors={authors}
				/>
			)
		)}
	</List>
);

export default StyledList;

const List = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0;
	max-width: 1300px;
	width: 100%;
	margin: 0 auto;
`;
