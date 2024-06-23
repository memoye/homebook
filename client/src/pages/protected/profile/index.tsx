import "./profile.scss";

type ProfileProps = object;

export function Profile(props: ProfileProps) {
  console.log(props);

  return <div className="Profile">Profile</div>;
}
