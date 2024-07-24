import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const { card, cardImg, cardText, online, offline } = css;
  return (
    <div className={card}>
      <img className={cardImg} src={avatar} alt="Avatar" width="88" />
      <p className={cardText}>{name}</p>
      <p className={isOnline ? online : offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  //   isOnline: PropTypes.boolean, (which propType is correct?)
};

export default FriendListItem;
