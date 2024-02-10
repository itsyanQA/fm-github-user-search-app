import "./UserExtraInfoItem.scss";

export type UserExtraInfoItemProps = {
  label: string;
  info: string | undefined;
};

export function UserExtraInfoItem({ label, info }: UserExtraInfoItemProps) {
  return (
    <div className="user-extra-info-item">
      <label className="user-extra-info-item__label">{label}</label>
      <span className="user-extra-info-item__info">{info}</span>
    </div>
  );
}
