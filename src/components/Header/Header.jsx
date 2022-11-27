import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import StyledWrapper from '../../common/StyledWrapper/StyledWrapper';

const Header = () => (
	<StyledHeader>
		<NavLink to={'/'}>
			<Logo />
		</NavLink>
		<StyledWrapper alignItems={'center'}>
			<StyleText>Username</StyleText>
			<Button buttonText={'Logout'} />
		</StyledWrapper>
	</StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 100px;
	background-color: #ffd0d0;
	border-bottom: 1px solid black;
`;

const StyleText = styled.p`
	margin-right: 50px;
`;
