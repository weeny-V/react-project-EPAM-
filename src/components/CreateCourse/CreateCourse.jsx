import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import pipeDuration from '../../helpers/pipeDuration';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import StyledWrapper from '../../common/StyledWrapper/StyledWrapper';
import StyledTextarea from '../../common/StyledTextarea/StyledTeaxarea';
import StyledAuthorList from '../../common/StyledAuthorList/StyledAuthorList';

const CreateCourse = () => {
	useEffect(() => {
		setAuthorsList(mockedAuthorsList);
	}, []);
	const navigate = useNavigate();
	const [authorsList, setAuthorsList] = useState([]);
	const [form, setForm] = useState({
		title: '',
		description: '',
		author: '',
		duration: null,
		formAuthorsList: [],
	});
	const [isDirtyTitle, setIsDirtyTitle] = useState(false);
	const [isDirtyDescription, setIsDirtyDescription] = useState(false);
	const [isDirtyAuthor, setIsDirtyAuthor] = useState(false);
	const [isDirtyDuration, setIsDirtyDuration] = useState(false);
	const [isDirtyAuthorList, setIsDirtyAuthorList] = useState(false);
	const setDirty = (name) => {
		switch (name) {
			case 'title':
				setIsDirtyTitle(true);
				break;
			case 'description':
				setIsDirtyDescription(true);
				break;
			case 'author':
				setIsDirtyAuthor(true);
				break;
			case 'duration':
				setIsDirtyDuration(true);
				break;
			case 'all':
				setIsDirtyTitle(true);
				setIsDirtyDescription(true);
				setIsDirtyDuration(true);
				setIsDirtyAuthorList(true);
				break;
			default:
				break;
		}
	};
	const handleChanges = ({ target: { value, name } }) => {
		setForm({ ...form, [name]: value });
		setDirty(name);
	};
	const createAuthor = () => {
		if (form.author.length > 2) {
			const newAuthor = {
				id: uuidv4(),
				name: form.author,
			};

			setIsDirtyAuthor(false);
			setForm({ ...form, author: '' });
			setAuthorsList([newAuthor, ...authorsList]);
			mockedAuthorsList.push(newAuthor);
		}
	};
	const addAuthor = (author) => {
		setAuthorsList(authorsList.filter(({ id }) => id !== author.id));
		setForm({ ...form, formAuthorsList: [...form.formAuthorsList, author] });
	};
	const deleteAuthor = (author) => {
		setAuthorsList([...authorsList, author]);
		setForm({
			...form,
			formAuthorsList: form.formAuthorsList.filter(
				({ id }) => id !== author.id
			),
		});
	};
	const isValid = () => {
		if (form.title.length < 1) {
			return false;
		}
		if (form.description.length < 2) {
			return false;
		}
		if (form.duration === null) {
			return false;
		}

		return form.formAuthorsList.length >= 1;
	};
	const createCourse = () => {
		setDirty('all');
		if (isValid()) {
			const date = new Date();
			const newCourse = {
				id: uuidv4(),
				title: form.title,
				description: form.description,
				creationDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
				duration: +form.duration,
				authors: form.formAuthorsList.map(({ id }) => id),
			};

			mockedCoursesList.push(newCourse);
			navigate('/');
		}
	};

	return (
		<StyledInputWrapper>
			<StyledWrapper justifyContent={'space-between'} alignItems={'center'}>
				<StyledWrapper direction={'column'}>
					<Input
						labelText={'Title'}
						placeholderText={'Enter title...'}
						onChange={handleChanges}
						name={'title'}
						value={form.title}
					/>
					{isDirtyTitle && form.title.length < 1 && (
						<StyledErrorMessage>*Title cannot be empty</StyledErrorMessage>
					)}
				</StyledWrapper>
				<Button buttonText={'Create course'} onClick={createCourse} />
			</StyledWrapper>
			<StyledTextarea
				labelText={'Description'}
				placeholderText={'Enter description...'}
				name={'description'}
				value={form.description}
				onChange={handleChanges}
			/>
			{isDirtyDescription && form.description.length <= 2 && (
				<StyledErrorMessage>*Could be longer than 2 symbols</StyledErrorMessage>
			)}
			<StyledWrapper padding={'0 60px'}>
				<StyledWrapper direction={'column'} flex={'1'}>
					<StyledWrapper direction={'column'} alignItems={'center'}>
						<StyledTopicH3>Add author</StyledTopicH3>
						<Input
							labelText={'Author name'}
							placeholderText={'Enter author name...'}
							width={'100%'}
							name={'author'}
							value={form.author}
							onChange={handleChanges}
						/>
						{isDirtyAuthor && form.author.length <= 2 && (
							<StyledErrorMessage>
								*Could be longer than 2 symbols
							</StyledErrorMessage>
						)}
						<Button
							buttonText={'Create author'}
							onClick={createAuthor}
							disabled={!(form.author.length > 2)}
						/>
					</StyledWrapper>
					<StyledWrapper direction={'column'} alignItems={'center'}>
						<StyledTopicH3>Duration</StyledTopicH3>
						<Input
							labelText={'Duration'}
							placeholderText={'Enter duration in minutes...'}
							width={'100%'}
							name={'duration'}
							value={form.duration || ''}
							onChange={handleChanges}
						/>
						{isDirtyDuration && form.duration === null && (
							<StyledErrorMessage>*Duration cannot be empty</StyledErrorMessage>
						)}
						<StyledDurationWrapper>
							Duration:{' '}
							<StyledDuration>
								{pipeDuration(form.duration || 0)}
							</StyledDuration>
						</StyledDurationWrapper>
					</StyledWrapper>
				</StyledWrapper>
				<StyledWrapper
					direction={'column'}
					width={'100%'}
					alignItems={'center'}
					flex={'1'}
				>
					<StyledWrapper direction={'column'} alignItems={'center'}>
						<StyledTopicH3>Authors</StyledTopicH3>
						<StyledAuthorList
							authorsList={authorsList}
							isAdd={true}
							onAdd={addAuthor}
						/>
					</StyledWrapper>
					<StyledWrapper direction={'column'} alignItems={'center'}>
						<StyledTopicH3>Course authors</StyledTopicH3>
						{isDirtyAuthorList && form.formAuthorsList.length < 1 && (
							<StyledErrorMessage>
								*Please add author who created this course
							</StyledErrorMessage>
						)}
						{form.formAuthorsList.length === 0 ? (
							<p>Author list is empty</p>
						) : (
							<StyledAuthorList
								authorsList={form.formAuthorsList}
								isDelete={true}
								onDelete={deleteAuthor}
							/>
						)}
					</StyledWrapper>
				</StyledWrapper>
			</StyledWrapper>
		</StyledInputWrapper>
	);
};

export default CreateCourse;

const StyledInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px;
	box-sizing: border-box;
	width: 100%;
	margin: 0 auto;
`;
const StyledTopicH3 = styled.h3`
	font-size: 28px;
	font-weight: bold;
`;
const StyledDurationWrapper = styled.p`
	font-size: 36px;
`;
const StyledDuration = styled.span`
	font-weight: bold;
`;
const StyledErrorMessage = styled.span`
	font-size: 14px;
	color: red;
	align-self: flex-start;
`;
