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
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <button className="flex items-center gap-1 rounded-lg border border-light-surface px-3 py-1.5 text-sm font-medium text-light-surface transition-colors hover:bg-light-surface hover:text-primary-foreground">
          Voir tout
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-background">
          <Icon className="h-7 w-7 text-light-surface" />
        </div>
        <h4 className="text-base font-medium text-foreground">{emptyTitle}</h4>
        <p className="mt-1 max-w-[200px] text-sm text-muted-foreground">{emptyDescription}</p>
        <button className="mt-4 flex items-center gap-1 text-sm font-medium text-light-surface transition-colors hover:text-mid-surface">
          {linkText}
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
