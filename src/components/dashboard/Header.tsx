import { Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Vue d'ensemble</p>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="h-9 w-56 rounded-lg border border-border bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
          />
        </div>

        {/* Notifications */}
        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            3
          </span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3 pl-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-medium text-foreground">
            TT
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">Tim TIM</p>
            <p className="text-xs text-muted-foreground">ADMIN</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
