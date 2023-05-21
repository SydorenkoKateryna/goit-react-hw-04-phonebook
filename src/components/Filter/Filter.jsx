import PropTypes from 'prop-types';
import {Label, Input} from './Filter.styled';

const Filter = ({ filterValue, setFilter }) => {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filterValue}
          onChange={setFilter}
        />
      </Label>
    </div>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
