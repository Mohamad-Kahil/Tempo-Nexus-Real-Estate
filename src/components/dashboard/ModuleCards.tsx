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
    <Card className="bg-white dark:bg-nexus-dark-sidebar overflow-hidden h-full flex flex-col border-0 shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              {icon}
            </div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </div>
        </div>
        <CardDescription className="mt-2 text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </span>
              <span className="text-xl font-bold">{stat.value}</span>
              {stat.color && (
                <Badge
                  variant="outline"
                  className={`mt-1 w-fit ${stat.color.includes("green") ? "text-nexus-light-statusPaid" : stat.color.includes("red") ? "text-nexus-light-statusOverdue" : "text-nexus-light-statusPending"} bg-transparent border-current`}
                >
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
      <CardFooter className="pt-2 border-t border-gray-200 dark:border-gray-700">
        <Button
          onClick={onClick}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

interface ModuleCardsProps {
  onNavigate?: (path: string) => void;
}

const ModuleCards = ({
  onNavigate = (path: string) => {},
}: ModuleCardsProps) => {
  const modules = [
    {
      title: "Finance Overview",
      description:
        "View financial summaries, cash flow, and key performance indicators",
      icon: <BarChart3 className="h-5 w-5" />,
      stats: [
        { label: "Total Revenue", value: "$1.2M" },
        { label: "Expenses", value: "$780K" },
        { label: "Profit Margin", value: "35%", color: "text-green-600" },
        { label: "YoY Growth", value: "12%", color: "text-green-600" },
      ],
      ctaText: "View Financials",
      path: "/portfolio/projects",
    },
    {
      title: "AP/AR Management",
      description:
        "Manage accounts payable, receivables, and track payment statuses",
      icon: <Building2 className="h-5 w-5" />,
      stats: [
        { label: "Pending Invoices", value: 24 },
        { label: "Overdue", value: 8, color: "text-red-600" },
        { label: "Paid This Month", value: "$125K" },
        { label: "To Be Collected", value: "$187K" },
      ],
      ctaText: "Manage AP/AR",
      path: "/portfolio/projects",
    },
    {
      title: "Budgeting & Forecasting",
      description:
        "Create and monitor budgets, track variances, and forecast financials",
      icon: <Users className="h-5 w-5" />,
      stats: [
        { label: "Active Budgets", value: 5 },
        { label: "Budget Variance", value: "-3.2%", color: "text-amber-600" },
        { label: "Forecast Accuracy", value: "92%", color: "text-green-600" },
        { label: "Next Review", value: "May 15" },
      ],
      ctaText: "View Budgets",
      path: "/crm",
    },
  ];

  return (
    <div className="w-full bg-background">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Financial Modules
          </h2>
          <p className="text-muted-foreground">
            Access key financial management tools and reports
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-1 border-gray-700 text-gray-200 hover:bg-gray-800"
        >
          <BarChart3 className="h-4 w-4" /> View All Reports
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
