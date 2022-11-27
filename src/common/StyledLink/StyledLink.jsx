import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = ({ buttonText, to }) => <Link to={to}>{buttonText}</Link>;

export default StyledLink;

const Link = styled(NavLink)`
	display: flex;
	text-decoration: none;
	color: black;
	justify-content: center;
	align-items: center;
	height: 34px;
	box-sizing: border-box;
	padding: 12px 30px;
	background-color: white;
	border: 1px solid black;
	border-radius: 3px;

	&:hover {
		background-color: #f8f8f8;
		cursor: pointer;
	}
`;
