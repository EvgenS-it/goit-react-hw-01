// import css from './FriendListItem.module.css';
// import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  // firends.map
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
};

// FriendListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string,
//   image: PropTypes.string,
//   stats: PropTypes.object,
// };

export default FriendListItem;
