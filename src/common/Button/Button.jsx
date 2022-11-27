import styled from 'styled-components';

const Button = ({ buttonText, disabled, onClick }) => (
	<StyledButton onClick={onClick} disabled={disabled}>
		{buttonText}
	</StyledButton>
);

export default Button;

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 34px;
	padding: 12px 30px;
	background-color: white;
	border: 1px solid black;
	border-radius: 3px;

	&:hover {
		background-color: #f8f8f8;
		cursor: pointer;
	}

	&:disabled {
		background-color: gainsboro;
	}
`;
