import { AlertTriangle } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "En cours", value: 50 },
  { name: "Résolus", value: 50 },
];

const COLORS = ["hsl(var(--secondary))", "hsl(var(--primary))"];

const DonutChart = () => {
  return (
    <div className="card-stat flex h-full flex-col">
      <div className="flex items-start gap-3">
        <div className="icon-container icon-container-accent h-9 w-9">
          <AlertTriangle className="h-4 w-4" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground">Incidents par Statut</h3>
          <p className="text-[13px] text-muted-foreground">Répartition actuelle</p>
        </div>
      </div>

      <div className="mt-4 flex flex-1 items-center justify-center">
        <div className="relative h-40 w-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={52}
                outerRadius={72}
                paddingAngle={4}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold tracking-tight text-foreground">50%</span>
            <span className="text-xs text-muted-foreground">Résolus</span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2.5 border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
            <span className="text-[13px] text-foreground">En cours</span>
            <span className="text-xs text-muted-foreground">50 incidents</span>
          </div>
          <span className="text-[13px] font-medium text-foreground">50%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-[13px] text-foreground">Résolus</span>
            <span className="text-xs text-muted-foreground">50 incidents</span>
          </div>
          <span className="text-[13px] font-medium text-foreground">50%</span>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-3">
          <span className="text-[13px] text-muted-foreground">Total incidents</span>
          <span className="text-[13px] font-semibold text-foreground">100</span>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
