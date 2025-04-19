import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Building2,
  Users,
  Home,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SubmoduleItem {
  label: string;
  path: string;
}

interface SidebarMenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  submodules: SubmoduleItem[];
}

interface SidebarProps {
  userRole?: "admin" | "sales" | "property_manager" | string;
  userName?: string;
  userAvatar?: string;
}

const sidebarMenu: SidebarMenuItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    submodules: [
      { label: "Overview", path: "/" },
      { label: "Analytics", path: "/dashboard/analytics" },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    icon: <Building2 className="h-5 w-5" />,
    submodules: [
      { label: "Projects", path: "/portfolio/projects" },
      { label: "Buildings", path: "/portfolio/buildings" },
      { label: "Units", path: "/portfolio/units" },
      { label: "Parking", path: "/portfolio/parking" },
      { label: "Unit Models", path: "/portfolio/unit-models" },
      { label: "Engineering Status", path: "/portfolio/engineering" },
      { label: "Pricing & Payment Rules", path: "/portfolio/pricing" },
      { label: "AP/AR Management", path: "/portfolio/ap-ar" },
    ],
  },
  {
    id: "crm",
    title: "CRM",
    icon: <Users className="h-5 w-5" />,
    submodules: [
      { label: "Leads", path: "/crm/leads" },
      { label: "Prospects", path: "/crm/prospects" },
      { label: "Contacts", path: "/crm/contacts" },
      { label: "Communication Logs", path: "/crm/communications" },
      { label: "Sales Funnel", path: "/crm/pipeline" },
      { label: "Tasks & Reminders", path: "/crm/tasks" },
      { label: "Documents", path: "/crm/documents" },
      { label: "Campaigns", path: "/crm/campaigns" },
      { label: "Proposals & Offers", path: "/crm/offers" },
      { label: "Reports & Dashboards", path: "/crm/reports" },
    ],
  },
  {
    id: "property",
    title: "Property Management",
    icon: <Home className="h-5 w-5" />,
    submodules: [
      { label: "Properties", path: "/property/properties" },
      { label: "Units & Availability", path: "/property/units" },
      { label: "Leases", path: "/property/leases" },
      { label: "Tenants", path: "/property/tenants" },
      { label: "Rent & Fees", path: "/property/payments" },
      { label: "Maintenance", path: "/property/maintenance" },
      { label: "Assets & Facility", path: "/property/assets" },
      {
        label: "Occupancy & Financial Dashboards",
        path: "/property/occupancy",
      },
      { label: "Compliance Documents", path: "/property/compliance" },
      { label: "Reports & Exports", path: "/property/reports" },
    ],
  },
  {
    id: "settings",
    title: "Settings",
    icon: <Settings className="h-5 w-5" />,
    submodules: [
      { label: "User Profile", path: "/settings/profile" },
      { label: "Preferences", path: "/settings/preferences" },
      { label: "System Settings", path: "/settings/system" },
    ],
  },
];

const Sidebar = ({
  userRole = "admin",
  userName = "John Doe",
  userAvatar = "",
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const location = useLocation();

  const toggleModule = (moduleId: string) => {
    if (expandedModule === moduleId) {
      setExpandedModule(null);
    } else {
      setExpandedModule(moduleId);
    }
  };

  // Filter menu items based on user role
  const filteredMenu = sidebarMenu.filter((item) => {
    if (userRole === "admin") return true;
    if (
      item.id === "portfolio" &&
      ["admin", "sales", "property_manager"].includes(userRole)
    )
      return true;
    if (item.id === "crm" && ["admin", "sales"].includes(userRole)) return true;
    if (
      item.id === "property" &&
      ["admin", "property_manager"].includes(userRole)
    )
      return true;
    if (item.id === "dashboard") return true;
    return false;
  });

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-nexus-light-sidebar dark:bg-nexus-dark-sidebar border-r border-nexus-light-sidebarBorder dark:border-nexus-dark-sidebarBorder transition-all duration-300",
        collapsed ? "w-20" : "w-80",
      )}
    >
      {/* Mobile Toggle */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-nexus-light-sidebarBorder dark:border-nexus-dark-sidebarBorder">
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="text-nexus-light-logo dark:text-nexus-dark-logo font-bold text-lg">
              Nexus
            </span>
            {!collapsed && (
              <span className="ml-1 font-semibold text-sm text-nexus-light-sidebarActiveText dark:text-nexus-dark-sidebarActiveText">
                Real Estate
              </span>
            )}
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-nexus-light-sidebarText dark:text-nexus-dark-sidebarText hover:text-nexus-light-sidebarActiveText dark:hover:text-nexus-dark-sidebarActiveText"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex items-center p-4 border-b border-nexus-light-sidebarBorder dark:border-nexus-dark-sidebarBorder">
        <div className="flex items-center">
          <span className="text-nexus-light-logo dark:text-nexus-dark-logo font-bold text-xl">
            Nexus
          </span>
          {!collapsed && (
            <span className="ml-1 font-semibold text-base text-nexus-light-sidebarActiveText dark:text-nexus-dark-sidebarActiveText">
              Real Estate
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto bg-nexus-light-sidebar dark:bg-nexus-dark-sidebar">
        <ul className="space-y-1 px-2">
          {filteredMenu.map((module) => {
            const isActive =
              location.pathname.startsWith(`/${module.id}`) ||
              (module.id === "dashboard" && location.pathname === "/");
            const isExpanded = expandedModule === module.id;

            return (
              <li key={module.id} className="mb-1">
                <div
                  className={cn(
                    "flex items-center p-2 rounded-md transition-colors cursor-pointer",
                    isActive
                      ? "bg-nexus-light-sidebarActive dark:bg-nexus-dark-sidebarActive text-nexus-light-sidebarActiveText dark:text-nexus-dark-sidebarActiveText"
                      : "text-nexus-light-sidebarText dark:text-nexus-dark-sidebarText hover:bg-nexus-light-sidebarHover dark:hover:bg-nexus-dark-sidebarHover hover:text-nexus-light-sidebarActiveText dark:hover:text-nexus-dark-sidebarActiveText",
                    collapsed ? "justify-center" : "justify-between",
                  )}
                  onClick={() => !collapsed && toggleModule(module.id)}
                >
                  <div className="flex items-center">
                    <TooltipProvider delayDuration={collapsed ? 100 : 1000}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className={collapsed ? "mx-auto" : ""}>
                            {module.icon}
                          </div>
                        </TooltipTrigger>
                        {collapsed && (
                          <TooltipContent side="right">
                            {module.title}
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                    {!collapsed && (
                      <span className="ml-3 text-[14px]">{module.title}</span>
                    )}
                  </div>
                  {!collapsed && module.submodules.length > 0 && (
                    <div>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                  )}
                </div>

                {/* Submodules */}
                {!collapsed && isExpanded && (
                  <ul className="mt-1 ml-4 space-y-1">
                    {module.submodules.map((submodule) => {
                      const isSubmoduleActive =
                        location.pathname === submodule.path;
                      return (
                        <li key={submodule.path}>
                          <Link
                            to={submodule.path}
                            className={cn(
                              "block py-2 px-3 rounded-md transition-colors text-[13px]",
                              isSubmoduleActive
                                ? "bg-nexus-light-sidebarActive dark:bg-nexus-dark-sidebarActive text-nexus-light-sidebarActiveText dark:text-nexus-dark-sidebarActiveText"
                                : "text-nexus-light-sidebarText dark:text-nexus-dark-sidebarText hover:bg-nexus-light-sidebarHover dark:hover:bg-nexus-dark-sidebarHover hover:text-nexus-light-sidebarActiveText dark:hover:text-nexus-dark-sidebarActiveText",
                            )}
                          >
                            {submodule.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Collapse Button */}
      <div className="hidden lg:flex justify-center p-4 border-t border-nexus-light-sidebarBorder dark:border-nexus-dark-sidebarBorder">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="text-nexus-light-sidebarText dark:text-nexus-dark-sidebarText hover:text-nexus-light-sidebarActiveText dark:hover:text-nexus-dark-sidebarActiveText"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* User Profile */}
      <div
        className={cn(
          "p-4 border-t border-nexus-light-sidebarBorder dark:border-nexus-dark-sidebarBorder flex items-center",
          collapsed ? "justify-center" : "justify-between",
        )}
      >
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src={userAvatar} />
            <AvatarFallback>
              {userName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="ml-3">
              <p className="text-xs font-medium text-nexus-light-sidebarActiveText dark:text-nexus-dark-sidebarActiveText">
                {userName}
              </p>
              <p className="text-[10px] text-nexus-light-sidebarText dark:text-nexus-dark-sidebarText capitalize">
                {userRole.replace("_", " ")}
              </p>
            </div>
          )}
        </div>
        {!collapsed && (
          <Button
            variant="ghost"
            size="icon"
            className="text-nexus-light-sidebarText dark:text-nexus-dark-sidebarText hover:text-nexus-light-sidebarActiveText dark:hover:text-nexus-dark-sidebarActiveText"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
