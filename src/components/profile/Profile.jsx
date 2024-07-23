import css from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div className={css.mainInfoContainer}>
        <img className={css.userImg} src={image} alt="User avatar" />
        <p className={css.mainInfoName}>{name}</p>
        <p className={css.mainInfoText}>{tag}</p>
        <p className={css.mainInfoText}>{location}</p>
      </div>

      <ul className={css.userInfoList}>
        <li className={css.infoItem}>
          <span className={css.infoItemText}>Followers</span>
          <span className={css.infoItemNumber}>{stats.followers}</span>
        </li>
        <li className={css.infoItem}>
          <span className={css.infoItemText}>Views</span>
          <span className={css.infoItemNumber}>{stats.views}</span>
        </li>
        <li className={css.infoItem}>
          <span className={css.infoItemText}>Likes</span>
          <span className={css.infoItemNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
