import { Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Vue d'ensemble</p>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="h-10 w-64 rounded-lg border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-light-surface focus:outline-none focus:ring-1 focus:ring-light-surface"
          />
        </div>

        {/* Notifications */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-background hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-mid-surface text-xs font-medium text-primary-foreground">
            3
          </span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mid-surface text-sm font-semibold text-primary-foreground">
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
