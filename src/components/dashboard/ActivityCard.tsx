import { ArrowUpRight, Calendar, CheckCircle } from "lucide-react";

interface ActivityCardProps {
  title: string;
  emptyIcon: "calendar" | "check";
  emptyTitle: string;
  emptyDescription: string;
  linkText: string;
}

const ActivityCard = ({ title, emptyIcon, emptyTitle, emptyDescription, linkText }: ActivityCardProps) => {
  const Icon = emptyIcon === "calendar" ? Calendar : CheckCircle;

  return (
    <div className="card-stat flex flex-col">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <button className="btn-accent">
          Voir tout
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
        <h4 className="text-sm font-medium text-foreground">{emptyTitle}</h4>
        <p className="mt-1 max-w-[200px] text-sm text-muted-foreground">{emptyDescription}</p>
        <button className="mt-4 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent-hover">
          {linkText}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
