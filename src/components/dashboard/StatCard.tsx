import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  variant?: "default" | "outlined" | "accent";
}

const StatCard = ({ title, value, subtitle, icon: Icon, variant = "default" }: StatCardProps) => {
  const variantStyles = {
    default: "bg-mid-surface border-mid-surface text-primary-foreground",
    outlined: "bg-card border-border text-foreground",
    accent: "bg-card border-l-4 border-l-light-surface border-t border-r border-b border-border text-foreground",
  };

  const iconStyles = {
    default: "text-border-muted",
    outlined: "text-light-surface",
    accent: "text-light-surface",
  };

  const subtitleStyles = {
    default: "text-border-muted",
    outlined: "text-muted-foreground",
    accent: "text-muted-foreground",
  };

  return (
    <div className={`card-stat ${variantStyles[variant]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider opacity-70">
            {title}
          </p>
          <p className="mt-2 text-4xl font-bold">{value}</p>
          <p className={`mt-1 text-sm ${subtitleStyles[variant]}`}>{subtitle}</p>
        </div>
        <div className={`rounded-lg p-2 ${variant === "default" ? "bg-light-surface/30" : "bg-background"}`}>
          <Icon className={`h-6 w-6 ${iconStyles[variant]}`} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
