import styled from 'styled-components';

import LogoIcon from '../../../../assets/logo.png';

const Logo = () => <StyledLogo src={LogoIcon} alt='IT Courses' />;

export default Logo;

const StyledLogo = styled.img`
	width: 60px;
	height: 60px;
`;
