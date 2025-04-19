import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import MetricsOverview from "./dashboard/MetricsOverview";
import ModuleCards from "./dashboard/ModuleCards";
import PortfolioOverview from "./dashboard/PortfolioOverview";
import Sidebar from "./layout/Sidebar";
import { ThemeToggle } from "./layout/ThemeToggle";
import Projects from "./Projects";

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="planning">Planning</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              {/* Content for All Projects tab */}
            </TabsContent>
            <TabsContent value="active">
              {/* Content for Active tab */}
            </TabsContent>
            <TabsContent value="planning">
              {/* Content for Planning tab */}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Metrics Overview */}
      <MetricsOverview />

      {/* Portfolio Overview */}
      <PortfolioOverview />

      {/* Module Cards */}
      <ModuleCards />
    </div>
  );
};

const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        userRole="admin"
        userName="Admin User"
        userAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-[4.8rem] bg-nexus-light-header dark:bg-nexus-dark-header text-nexus-light-headerText dark:text-nexus-dark-headerText flex items-center justify-between px-6 border-b border-nexus-light-sidebarBorder dark:border-nexus-dark-sidebarBorder">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-semibold hidden md:block">
              {location.pathname.includes("/portfolio/ap-ar")
                ? "AP/AR Management"
                : location.pathname.includes("/portfolio/projects")
                  ? "Projects"
                  : location.pathname.includes("/portfolio")
                    ? "Portfolio"
                    : location.pathname.includes("/crm")
                      ? "CRM"
                      : location.pathname.includes("/property")
                        ? "Property Management"
                        : "Dashboard"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64 hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-md border border-gray-700 bg-gray-800 pl-8 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-white">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium hidden md:inline-block text-white">
                JD
              </span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/portfolio/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Home;
