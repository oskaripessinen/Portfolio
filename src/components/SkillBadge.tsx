
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

const SkillBadge = ({ name, className, style }: SkillBadgeProps) => {
  return (
    <div 
      className={cn(
        "px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm inline-block transition-all hover:bg-blue-200",
        className
      )}
      style={style}
    >
      {name}
    </div>
  );
};

export default SkillBadge;
