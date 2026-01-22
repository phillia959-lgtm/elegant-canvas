import { ArrowUpRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Jan", value: 8 },
  { name: "Fév", value: 12 },
  { name: "Mar", value: 10 },
  { name: "Avr", value: 14 },
  { name: "Mai", value: 9 },
  { name: "Jun", value: 11 },
];

const ChartCard = () => {
  return (
    <div className="card-stat flex flex-col">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Total Congés</h3>
          <p className="text-sm text-muted-foreground">Évolution mensuelle</p>
        </div>
        <button className="flex items-center gap-1 rounded-lg border border-light-surface px-3 py-1.5 text-sm font-medium text-light-surface transition-colors hover:bg-light-surface hover:text-primary-foreground">
          Voir tout
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-6 flex-1">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} barCategoryGap="20%">
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis hide />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill="hsl(var(--light-surface))"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-light-surface" />
        Jours de congés
        <span className="ml-auto">Max: 5 200 jours</span>
      </div>
    </div>
  );
};

export default ChartCard;
