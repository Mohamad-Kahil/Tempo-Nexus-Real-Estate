import React from "react";
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

const Home: React.FC = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        userRole="admin"
        userName="Admin User"
        userAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="relative w-64 hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-md border border-input bg-background pl-8 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium hidden md:inline-block">
                Nexus Development Corp
              </span>
              <Button variant="ghost" size="icon">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
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
        </main>
      </div>
    </div>
  );
};

export default Home;
