import "./UserExternalLink.scss";

export type ExternalLinkType = "TWITTER" | "COMPANY" | "WEBSITE";

type UserExternalLinkProps = {
  Icon: JSX.Element;
  info: string | undefined | null;
  externalLinkType?: ExternalLinkType;
};

export function UserExternalLink({ Icon, info, externalLinkType }: UserExternalLinkProps) {
  const anchorTagLink: Record<ExternalLinkType, string> = {
    COMPANY: `https://github.com/${info?.substring(1)}`,
    TWITTER: `https://twitter.com/${info}`,
    WEBSITE: info as string,
  };

  return (
    <div className={`user-external-link ${!info ? "user-external-link--not-available" : ""}`}>
      {Icon}
      {!!info && externalLinkType ? (
        <a
          target="_blank"
          className={`user-external-link__text ${externalLinkType ? "user-external-link__text--is-link" : ""}`}
          href={anchorTagLink[externalLinkType]}
        >
          {info}
        </a>
      ) : (
        <span className="user-external-link__text">{info || "Not available"}</span>
      )}
    </div>
  );
}
