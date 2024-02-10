import { useSearchContext } from "../../../../context/SearchContextProvider";
import "./UserExternalLinks.scss";
import CompanyIcon from "../../../../assets/icon-company.svg?react";
import LocationIcon from "../../../../assets/icon-location.svg?react";
import TwitterIcon from "../../../../assets/icon-twitter.svg?react";
import WebsiteIcon from "../../../../assets/icon-website.svg?react";
import { UserExternalLink } from "../UserExternalLink/UserExternalLink";

export function UserExternalLinks() {
  const { userData } = useSearchContext();

  return (
    <div className="user-external-links">
      <div className="user-external-links__link-group">
        <UserExternalLink Icon={<LocationIcon />} info={userData?.location} />
        <UserExternalLink Icon={<WebsiteIcon />} info={userData?.blog} externalLinkType="WEBSITE" />
      </div>

      <div className="user-external-links__link-group">
        <UserExternalLink Icon={<TwitterIcon />} info={userData?.twitterUsername} externalLinkType="TWITTER" />
        <UserExternalLink Icon={<CompanyIcon />} info={userData?.company} externalLinkType="COMPANY" />
      </div>
    </div>
  );
}
