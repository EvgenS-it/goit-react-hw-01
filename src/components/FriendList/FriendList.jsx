// import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
// import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

// FriendList.propTypes = {
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string,
//   image: PropTypes.string,
//   stats: PropTypes.object,
// };

export default FriendList;
