import styled from 'styled-components';
import autoHeight from '../../helpers/autoHeight';

import IF from '../../common/IF/IF';
import StyledLabel from '../../common/StyledLabel/StyledLabel';

const StyledTextarea = ({
	labelText,
	placeholderText,
	name,
	value,
	onChange,
}) => (
	<>
		<IF condition={labelText}>
			<StyledLabel text={labelText} />
		</IF>
		<Textarea
			placeholder={placeholderText}
			onChange={onChange}
			onInput={(event) => autoHeight(event.target)}
			name={name}
			value={value}
		/>
	</>
);

export default StyledTextarea;

const Textarea = styled.textarea`
	font-size: 16px;
	resize: none;
	overflow: hidden;
	min-height: 200px;
	max-height: 300px;
	padding: 10px;
	box-sizing: border-box;
`;
