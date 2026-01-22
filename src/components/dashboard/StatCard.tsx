import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  variant?: "default" | "accent";
}

const StatCard = ({ title, value, subtitle, icon: Icon, variant = "default" }: StatCardProps) => {
  return (
    <div className="card-kpi">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {title}
          </p>
          <p className="mt-2 text-3xl font-semibold text-foreground">{value}</p>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
          variant === "accent" 
            ? "bg-primary/10 text-primary" 
            : "bg-secondary text-muted-foreground"
        }`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
