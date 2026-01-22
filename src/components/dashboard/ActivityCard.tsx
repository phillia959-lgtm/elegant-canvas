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
        <div className="icon-container icon-container-default mb-4 h-14 w-14 rounded-full">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <h4 className="text-sm font-medium text-foreground">{emptyTitle}</h4>
        <p className="mt-1.5 max-w-[220px] text-[13px] leading-relaxed text-muted-foreground">{emptyDescription}</p>
        <button className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-200 hover:gap-2">
          {linkText}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
