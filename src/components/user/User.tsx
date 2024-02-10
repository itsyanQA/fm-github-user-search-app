import { useSearchContext } from "../../context/SearchContextProvider";
import { Spinner } from "../spinner/Spinner";
import { UserAvatar } from "./sub-components/UserAvatar/UserAvatar";
import { UserInfo } from "./sub-components/UserInfo/UserInfo";
import "./User.scss";

export default function User() {
  const { isFetching, userData } = useSearchContext();

  if (isFetching) {
    return <Spinner />;
  } else if (userData) {
    return (
      <div className="user" key={userData?.id}>
        <div className="user__avatar">
          <UserAvatar />
        </div>
        <UserInfo />
      </div>
    );
  }
}
