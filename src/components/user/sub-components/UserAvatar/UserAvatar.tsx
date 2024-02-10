import { useSearchContext } from "../../../../context/SearchContextProvider";
import "./UserAvatar.scss";

export function UserAvatar() {
  const { userData } = useSearchContext();
  return <img className="user-avatar" src={userData?.avatarUrl} alt="user-avatar" />;
}
