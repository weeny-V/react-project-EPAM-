import styled from 'styled-components';

import IF from '../../common/IF/IF';
import Button from '../../common/Button/Button';
import StyledWrapper from '../../common/StyledWrapper/StyledWrapper';

const StyledAuthorList = ({
	authorsList,
	isAdd,
	isDelete,
	onAdd,
	onDelete,
}) => (
	<AuthorsList>
		{authorsList.map((author) => (
			<StyledWrapper
				justifyContent={'space-between'}
				alignItems={'center'}
				key={author.id}
			>
				<StyledName>{author.name}</StyledName>
				<IF condition={isAdd}>
					<Button buttonText={'Add author'} onClick={() => onAdd(author)} />
				</IF>
				<IF condition={isDelete}>
					<Button
						buttonText={'Delete author'}
						onClick={() => onDelete(author)}
					/>
				</IF>
			</StyledWrapper>
		))}
	</AuthorsList>
);

export default StyledAuthorList;

const AuthorsList = styled.ul`
	padding: 0 10px;
	list-style: none;
	max-height: 240px;
	overflow: auto;
	border: 1px solid #c4c4c4;

	&::-webkit-scrollbar {
		width: 4px;
	}

	&::-webkit-scrollbar-track {
		background-color: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #c4c4c4;
		border-radius: 20px;
	}
`;
const StyledName = styled.p`
	margin-right: 100px;
	font-size: 18px;
`;
