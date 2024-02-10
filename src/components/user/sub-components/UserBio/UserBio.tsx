import { useSearchContext } from "../../../../context/SearchContextProvider";
import "./UserBio.scss";

export default function UserBio() {
  const { userData } = useSearchContext();

  return <p className={`user-bio ${!userData?.bio ? "user-bio--no-bio" : ""}`}>{userData?.bio ?? "This profile has no bio"}</p>;
}
