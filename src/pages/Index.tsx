import { Users, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import DonutChart from "@/components/dashboard/DonutChart";
import ActivityCard from "@/components/dashboard/ActivityCard";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 overflow-auto p-6">
          {/* Key Indicators Section */}
          <div className="section-divider mb-4">
            <span>Indicateurs clés</span>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Employés"
              value={9}
              subtitle="Dans l'entreprise"
              icon={Users}
              variant="default"
            />
            <StatCard
              title="Congés en attente"
              value={1}
              subtitle="À traiter"
              icon={Clock}
              variant="outlined"
            />
            <StatCard
              title="Incidents ouverts"
              value={0}
              subtitle="Nécessitent attention"
              icon={AlertTriangle}
              variant="outlined"
            />
            <StatCard
              title="Congés approuvés"
              value={2}
              subtitle="Ce mois"
              icon={CheckCircle}
              variant="accent"
            />
          </div>

          {/* Analyses Section */}
          <div className="section-divider mb-4 mt-8">
            <span>Analyses</span>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ChartCard />
            </div>
            <div className="lg:col-span-2">
              <DonutChart />
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="section-divider mb-4 mt-8">
            <span>Activité récente</span>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ActivityCard
              title="Demandes de congés"
              emptyIcon="calendar"
              emptyTitle="Aucune demande en attente"
              emptyDescription="Toutes les demandes de congés ont été traitées. Excellente gestion !"
              linkText="Voir les congés"
            />
            <ActivityCard
              title="Incidents récents"
              emptyIcon="check"
              emptyTitle="Aucun incident récent"
              emptyDescription="Aucun incident n'a été signalé récemment. Tout fonctionne correctement !"
              linkText="Voir les incidents"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
