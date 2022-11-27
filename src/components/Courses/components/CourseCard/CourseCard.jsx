import styled from 'styled-components';
import pipeDuration from '../../../../helpers/pipeDuration';
import dateGenerator from '../../../../helpers/dateGenerator';
import { mockedAuthorsList } from '../../../../constants';

import Button from '../../../../common/Button/Button';
import StyledWrapper from '../../../../common/StyledWrapper/StyledWrapper';

const CourseCard = ({ title, description, authors, duration, createdDate }) => {
	const getAuthorNames = (authors) => {
		let authorNames = [];
		let result = '';

		authors.forEach((id) => {
			authorNames = authorNames.concat(
				mockedAuthorsList.filter((user) => user.id === id && user)
			);
		});
		for (let i = 0; i < authorNames.length; i++) {
			if (i === authorNames.length - 1) {
				result = result + authorNames[i].name;
			} else {
				result = result + `${authorNames[i].name}, `;
			}
		}

		return result;
	};

	return (
		<StyledCard justifyContent={'space-between'} width={'100%'}>
			<StyledWrapper direction={'column'}>
				<StyledTopic>{title}</StyledTopic>
				<StyledDescription>{description}</StyledDescription>
			</StyledWrapper>
			<StyledWrapper direction={'column'} alignItems={'start'}>
				<p>
					<StyledBold>Authors:</StyledBold> {getAuthorNames(authors)}
				</p>
				<p>
					<StyledBold>Duration:</StyledBold> {pipeDuration(duration)}
				</p>
				<p>
					<StyledBold>Created:</StyledBold> {dateGenerator(createdDate)}
				</p>
				<StyledWrapper margin={'0 auto'}>
					<Button buttonText={'Show course'} />
				</StyledWrapper>
			</StyledWrapper>
		</StyledCard>
	);
};

export default CourseCard;

const StyledCard = styled.li`
	display: flex;
	justify-content: space-between;
	width: 100%;
	border: 1px solid black;
	margin-bottom: 40px;
	padding: 20px 40px;
	box-sizing: border-box;

	&:last-child {
		margin-bottom: 0;
	}
`;
const StyledTopic = styled.h3`
	font-weight: bold;
	font-size: 32px;
`;
const StyledDescription = styled.p`
	max-width: 700px;
`;
const StyledBold = styled.span`
	font-weight: bold;
`;
