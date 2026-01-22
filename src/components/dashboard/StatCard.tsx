import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  variant?: "default" | "accent";
}

const StatCard = ({ title, value, subtitle, icon: Icon, variant = "default" }: StatCardProps) => {
  const isAccent = variant === "accent";
  
  return (
    <div className={isAccent ? "card-kpi-accent" : "card-kpi"}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={`text-[11px] font-semibold uppercase tracking-wide ${
            isAccent ? "text-primary/70" : "text-muted-foreground"
          }`}>
            {title}
          </p>
          <p className={`mt-2 text-3xl font-semibold tracking-tight ${
            isAccent ? "text-foreground" : "text-foreground"
          }`}>
            {value}
          </p>
          <p className="mt-1.5 text-[13px] text-muted-foreground">{subtitle}</p>
        </div>
        <div className={`icon-container h-11 w-11 ${
          isAccent ? "icon-container-accent" : "icon-container-default"
        }`}>
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
