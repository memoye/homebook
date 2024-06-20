import "./logo.scss";
import { FenceIcon } from "lucide-react";

type LogoProps = {
  full?: boolean;
};

export const Logo = ({ full }: LogoProps) => {
  return (
    <div className="logo">
      <FenceIcon className="icon" />
      {full && (
        <span className="text">
          home<span>Book</span>
        </span>
      )}
    </div>
  );
};
