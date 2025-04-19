import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Wrench, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: {
    label: string;
    value: string | number;
    color?: string;
  }[];
  ctaText: string;
  onClick: () => void;
}

const ModuleCard = ({
  title,
  description,
  icon,
  stats,
  ctaText,
  onClick = () => {},
}: ModuleCardProps) => {
  return (
    <Card className="bg-white dark:bg-slate-800 overflow-hidden h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              {icon}
            </div>
            <CardTitle>{title}</CardTitle>
          </div>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
              <span className="text-2xl font-bold">{stat.value}</span>
              {stat.color && (
                <Badge variant="outline" className={`mt-1 w-fit ${stat.color}`}>
                  {stat.color.includes("green")
                    ? "Increasing"
                    : stat.color.includes("red")
                      ? "Decreasing"
                      : "Stable"}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <Button onClick={onClick} className="w-full">
          {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

interface ModuleCardsProps {
  onNavigate?: (path: string) => void;
}

const ModuleCards = ({ onNavigate = () => {} }: ModuleCardsProps) => {
  const modules = [
    {
      title: "Project Explorer",
      description:
        "Navigate through your real estate portfolio, phases, buildings, and units",
      icon: <Building2 className="h-5 w-5" />,
      stats: [
        { label: "Active Projects", value: 12 },
        { label: "Total Units", value: 1458 },
        { label: "Phases in Progress", value: 8 },
        { label: "Completion Rate", value: "68%", color: "text-green-600" },
      ],
      ctaText: "Explore Projects",
      path: "/projects",
    },
    {
      title: "CRM Pipeline",
      description:
        "Manage leads, prospects, and sales opportunities in your pipeline",
      icon: <Users className="h-5 w-5" />,
      stats: [
        { label: "Active Leads", value: 87 },
        { label: "Opportunities", value: 34 },
        { label: "Conversion Rate", value: "23%", color: "text-amber-600" },
        { label: "Deals Closed", value: 9, color: "text-green-600" },
      ],
      ctaText: "View Pipeline",
      path: "/crm",
    },
    {
      title: "Property Management",
      description:
        "Monitor units, tenants, and maintenance requests across properties",
      icon: <Wrench className="h-5 w-5" />,
      stats: [
        { label: "Occupied Units", value: 876 },
        { label: "Vacancy Rate", value: "12%", color: "text-red-600" },
        { label: "Maintenance Tickets", value: 42 },
        { label: "Upcoming Renewals", value: 18 },
      ],
      ctaText: "Manage Properties",
      path: "/properties",
    },
  ];

  return (
    <div className="w-full bg-background">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Quick Access</h2>
          <p className="text-muted-foreground">
            Access key modules of your real estate platform
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-1">
          <BarChart3 className="h-4 w-4" /> View All Analytics
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <ModuleCard
            key={index}
            title={module.title}
            description={module.description}
            icon={module.icon}
            stats={module.stats}
            ctaText={module.ctaText}
            onClick={() => onNavigate(module.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default ModuleCards;
