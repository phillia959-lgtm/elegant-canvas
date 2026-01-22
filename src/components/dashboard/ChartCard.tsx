import { ArrowUpRight } from "lucide-react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";

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
    <div className="card-stat flex h-full flex-col">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold text-foreground">Total Congés</h3>
          <p className="text-sm text-muted-foreground">Évolution mensuelle</p>
        </div>
        <button className="btn-accent">
          Voir tout
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="mt-6 flex-1">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={data} barCategoryGap="25%">
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill="hsl(var(--primary))"
                  opacity={0.85}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-primary" />
        Jours de congés
        <span className="ml-auto text-foreground font-medium">Max: 5 200 jours</span>
      </div>
    </div>
  );
};

export default ChartCard;
