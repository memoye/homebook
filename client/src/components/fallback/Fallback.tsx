import { Loader2Icon } from "lucide-react";
import "./fallback.scss";
import { paths } from "../../lib/paths";
import HomeSkeleton from "./HomeSkeleton";
import AboutSkeleton from "./AboutSkeleton";
import AgentsSkeleton from "./AgentsSkeleton";
import ContactSkeleton from "./ContactSkeleton";
import LoginSkeleton from "./LoginSkeleton";
import SignUpSkeleton from "./SignUpSkeleton";
import PropertiesSkeleton from "./PropertiesSkeleton";

const PATH_NAMES = paths.left
  .concat(paths.right, paths.others)
  .map((p) => p.href);

type FallbackProps = {
  forPath?: string;
};

export default function Fallback({ forPath }: FallbackProps) {
  if (!forPath || !PATH_NAMES.includes(forPath))
    return (
      <div>
        <Loader2Icon />
      </div>
    );

  return (
    <div className="fallback">
      {{
        "/": <HomeSkeleton />,
        "/about": <AboutSkeleton />,
        "/agents": <AgentsSkeleton />,
        "/contact": <ContactSkeleton />,
        "/login": <LoginSkeleton />,
        "/signup": <SignUpSkeleton />,
        "/properties": <PropertiesSkeleton />,
      }[forPath] ?? <p>Loading...</p>}
    </div>
  );
}
