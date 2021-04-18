import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        color={showAdd ? 'red' : 'green'}
        btnText={showAdd ? 'Close' : 'Add'}
      />
    </header>
  );
};
Header.defaultProps = {
  title: 'Title',
  btnText: 'click me',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default Header;
