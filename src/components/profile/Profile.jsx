import css from './Profile.module.css';

const Profile = () => {
  return (
    <div className={css.profileCard}>
      <div className="mainInfoContainer">
        <img
          className={css.userImg}
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className="mainInfoText">Petra Marica</p>
        <p className="mainInfoText">@pmarica</p>
        <p className="mainInfoText">Salvador, Brasil</p>
      </div>

      <ul className="userInfoList">
        <li className="infoItem">
          <span className="infoItemText">Followers</span>
          <span className="infoItemText">1000</span>
        </li>
        <li className="infoItem">
          <span className="infoItemText">Views</span>
          <span className="infoItemText">2000</span>
        </li>
        <li className="infoItem">
          <span className="infoItemText">Likes</span>
          <span className="infoItemText">3000</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
