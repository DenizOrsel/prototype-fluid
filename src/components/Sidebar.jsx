import PropTypes from 'prop-types';
import './Sidebar.css'

const Sidebar = ({ onClick }) => {
  return (
    <div className='sidebarContainer' onClick={onClick}>Sidebar</div>
  )
}

Sidebar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Sidebar