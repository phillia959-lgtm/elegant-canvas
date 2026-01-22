import { 
  LayoutDashboard, 
  Calendar, 
  AlertTriangle, 
  Clock, 
  Megaphone, 
  Users, 
  User, 
  LogOut 
} from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
}

const NavItem = ({ icon, label, active, badge }: NavItemProps) => (
  <button
    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
      active
        ? "bg-sidebar-accent text-sidebar-accent-foreground"
        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
    }`}
  >
    {icon}
    <span>{label}</span>
    {active && (
      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-border-muted" />
    )}
    {badge !== undefined && (
      <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-mid-surface px-1.5 text-xs">
        {badge}
      </span>
    )}
  </button>
);

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-mid-surface">
          <LayoutDashboard className="h-5 w-5 text-sidebar-foreground" />
        </div>
        <span className="text-lg font-semibold text-sidebar-foreground">LeaveFlow</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        <NavItem 
          icon={<LayoutDashboard className="h-5 w-5" />} 
          label="Dashboard" 
          active 
        />
        <NavItem 
          icon={<Calendar className="h-5 w-5" />} 
          label="Congés" 
        />
        <NavItem 
          icon={<AlertTriangle className="h-5 w-5" />} 
          label="Incidents" 
        />
        <NavItem 
          icon={<Clock className="h-5 w-5" />} 
          label="Pointage" 
        />
        <NavItem 
          icon={<Megaphone className="h-5 w-5" />} 
          label="Annonces" 
        />
        <NavItem 
          icon={<Users className="h-5 w-5" />} 
          label="Utilisateurs" 
        />
        <NavItem 
          icon={<User className="h-5 w-5" />} 
          label="Profil" 
        />
      </nav>

      {/* User section */}
      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent px-3 py-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-mid-surface text-sm font-semibold text-sidebar-foreground">
            TT
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-sidebar-foreground">ADMIN</p>
          </div>
        </div>
        <button className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent/50 hover:text-sidebar-foreground">
          <LogOut className="h-5 w-5" />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
