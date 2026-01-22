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
      <div className="flex items-start gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <AlertTriangle className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground">Incidents par Statut</h3>
          <p className="text-sm text-muted-foreground">Répartition actuelle</p>
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
                innerRadius={50}
                outerRadius={70}
                paddingAngle={3}
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
            <span className="text-2xl font-semibold text-foreground">50%</span>
            <span className="text-xs text-muted-foreground">Résolus</span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2.5 border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
            <span className="text-sm text-foreground">En cours</span>
            <span className="text-xs text-muted-foreground">50 incidents</span>
          </div>
          <span className="text-sm font-medium text-foreground">50%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-sm text-foreground">Résolus</span>
            <span className="text-xs text-muted-foreground">50 incidents</span>
          </div>
          <span className="text-sm font-medium text-foreground">50%</span>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-2.5">
          <span className="text-sm text-muted-foreground">Total incidents</span>
          <span className="text-sm font-semibold text-foreground">100</span>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
