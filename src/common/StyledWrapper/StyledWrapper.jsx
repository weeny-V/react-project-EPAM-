import styled from 'styled-components';

const StyledWrapper = ({
	alignItems,
	justifyContent,
	direction,
	margin,
	padding,
	maxWidth,
	flex,
	width,
	children,
}) => (
	<Wrapper
		alignItems={alignItems}
		justifyContent={justifyContent}
		direction={direction}
		margin={margin}
		padding={padding}
		maxWidth={maxWidth}
		flex={flex}
		width={width}
	>
		{children}
	</Wrapper>
);

export default StyledWrapper;

const Wrapper = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction || 'row'};
	margin: ${({ margin }) => margin || 0};
	align-items: ${({ alignItems }) => alignItems || 'stretch'};
	justify-content: ${({ justifyContent }) => justifyContent || 'stretch'};
	padding: ${({ padding }) => padding || 0};
	max-width: ${({ maxWidth }) => maxWidth};
	flex: ${({ flex }) => flex};
	width: ${({ width }) => width};
`;
