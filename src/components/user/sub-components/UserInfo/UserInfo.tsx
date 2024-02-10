import UserBio from "../UserBio/UserBio";
import { UserExternalLinks } from "../UserExternalLinks/UserExternalLinks";
import { UserExtraInfo } from "../UserExtraInfo/UserExtraInfo";
import { UserGeneralInfo } from "../UserGeneralInfo/UserGeneralInfo";
import "./UserInfo.scss";

export function UserInfo() {
  return (
    <div className="user-info">
      <UserGeneralInfo />
      <UserBio />
      <UserExtraInfo />
      <UserExternalLinks />
    </div>
  );
}
