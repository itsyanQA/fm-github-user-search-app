import { useSearchContext } from "../../../../context/SearchContextProvider";
import { UserExtraInfoItem, UserExtraInfoItemProps } from "../UserExtraInfoItem/UserExtraInfoItem";
import "./UserExtraInfo.scss";

export function UserExtraInfo() {
  const { userData } = useSearchContext();
  const info: UserExtraInfoItemProps[] = [
    { label: "repos", info: userData?.publicRepos },
    { label: "followers", info: userData?.followers },
    { label: "following", info: userData?.following },
  ];

  return (
    <div className="user-extra-info">
      {info.map((infoItem, index) => (
        <UserExtraInfoItem label={infoItem.label} info={infoItem?.info} key={index} />
      ))}
    </div>
  );
}
