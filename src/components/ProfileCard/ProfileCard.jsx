import "./styles.css";
import { profileData } from "./data";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="text-wrapper">
        <p>
          <span>Name: </span>
          {profileData.userName}
        </p>
        <p>
          <span>Occupation: </span>
          {profileData.occupation}
        </p>
        <p>
          <span>Hobby: </span>
          {profileData.hobby}
        </p>
      </div>
      <div className="img-wrapper">
        <img
          className="avatar-img"
          src={profileData.userAvatar}
          alt="user avatar"
        />
      </div>
    </div>
  );
}

export default ProfileCard;
