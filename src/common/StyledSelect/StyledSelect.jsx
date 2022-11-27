import styled from 'styled-components';

const StyledSelect = ({ value, onChange }) => (
	<Select value={value} onChange={onChange}>
		<option value={'title'}>Title</option>
		<option value={'id'}>ID</option>
	</Select>
);

export default StyledSelect;

const Select = styled.select`
	font-size: 16px;
	height: 34px;
	margin: 0 20px;
`;
