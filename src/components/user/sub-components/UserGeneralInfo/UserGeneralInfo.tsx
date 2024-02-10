import { useSearchContext } from "../../../../context/SearchContextProvider";
import { DateUtils } from "../../../../utils/dateUtils";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import "./UserGeneralInfo.scss";

export function UserGeneralInfo() {
  const { userData } = useSearchContext();

  return (
    <div className="user-general-info">
      <div className="user-general-info__avatar">
        <UserAvatar />
      </div>

      <div className="user-general-info__names-and-date">
        <div className="user-general-info__names">
          <h1 className="user-general-info__title">{userData?.name ?? userData?.login}</h1>
          <a
            className="user-general-info__username"
            href={`https://github.com/${userData?.login}`}
            target="_blank"
          >{`@${userData?.login}`}</a>
        </div>
        <span className="user-general-info__date">{DateUtils.getDateJoined(userData?.createdAt)}</span>
      </div>
    </div>
  );
}
