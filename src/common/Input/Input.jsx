import styled from 'styled-components';

import IF from '../../common/IF/IF';
import StyledLabel from '../../common/StyledLabel/StyledLabel';
import StyledWrapper from '../../common/StyledWrapper/StyledWrapper';

const Input = ({
	labelText,
	width,
	placeholderText,
	onChange,
	name,
	value,
	margin,
}) => (
	<StyledWrapper direction={'column'} width={width} margin={'0 0 10px 0'}>
		<IF condition={labelText}>
			<StyledLabel text={labelText} />
		</IF>
		<StyledInput
			type='text'
			value={value}
			name={name}
			placeholder={placeholderText}
			onChange={onChange}
			margin={margin}
			width={width}
		/>
	</StyledWrapper>
);

export default Input;

const StyledInput = styled.input`
	height: 30px;
	padding: 0 10px;
	margin: ${({ margin }) => margin || 0};
	width: ${({ width }) => width || '400px'};
`;
