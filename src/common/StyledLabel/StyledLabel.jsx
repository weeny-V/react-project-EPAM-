import styled from 'styled-components';

const StyledLabel = ({ text }) => <Label>{text}</Label>;

export default StyledLabel;

const Label = styled.label`
	font-size: 14px;
	margin-bottom: 10px;
`;
