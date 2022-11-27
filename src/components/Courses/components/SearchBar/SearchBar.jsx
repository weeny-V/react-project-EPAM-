import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import StyledSelect from '../../../../common/StyledSelect/StyledSelect';
import StyledWrapper from '../../../../common/StyledWrapper/StyledWrapper';

const SearchBar = ({ onChange, onFilter }) => (
	<StyledWrapper>
		<Input
			placeholderText={'Enter course name...'}
			margin={'0 20px 0 0'}
			onChange={onFilter}
		/>
		<Button buttonText={'Search'} />
		<StyledSelect onChange={onChange} />
	</StyledWrapper>
);

export default SearchBar;
