import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrendingUpIcon,
  HomeIcon,
  UsersIcon,
  WrenchIcon,
  DollarSignIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface MetricCardProps {
  title: string;
  value: string;
  trend: number;
  icon: React.ReactNode;
  chartData?: number[];
}

const MetricCard = ({
  title,
  value,
  trend,
  icon,
  chartData = [10, 15, 8, 12, 18, 15, 20],
}: MetricCardProps) => {
  const isPositive = trend >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className="h-full bg-white dark:bg-slate-800">
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-muted-foreground">{title}</p>
              <h3 className="text-xl font-bold mt-1">{value}</h3>
              <div className="flex items-center mt-1">
                <span
                  className={`text-[10px] flex items-center ${isPositive ? "text-green-600" : "text-red-600"}`}
                >
                  {isPositive ? (
                    <ArrowUpIcon className="h-2.5 w-2.5 mr-1" />
                  ) : (
                    <ArrowDownIcon className="h-2.5 w-2.5 mr-1" />
                  )}
                  {Math.abs(trend)}%
                </span>
                <span className="text-[10px] text-muted-foreground ml-1">
                  vs last month
                </span>
              </div>
            </div>
            <div className="p-2 rounded-full bg-primary/10">{icon}</div>
          </div>
          <div className="mt-4 h-10">
            <div className="flex items-end justify-between h-full">
              {chartData.map((value, index) => (
                <div
                  key={index}
                  className="w-1 bg-primary/60 rounded-t"
                  style={{
                    height: `${(value / Math.max(...chartData)) * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface MetricsOverviewProps {
  metrics?: {
    properties: number;
    occupancyRate: number;
    activeLeads: number;
    pipelineValue: number;
    maintenanceTickets: number;
  };
}

const MetricsOverview = ({
  metrics = {
    properties: 124,
    occupancyRate: 87,
    activeLeads: 56,
    pipelineValue: 4.2,
    maintenanceTickets: 18,
  },
}: MetricsOverviewProps) => {
  return (
    <div className="w-full bg-background">
      <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricCard
          title="Total Properties"
          value={metrics.properties.toString()}
          trend={5.2}
          icon={<HomeIcon className="h-5 w-5 text-primary" />}
          chartData={[8, 12, 15, 14, 16, 19, 22]}
        />
        <MetricCard
          title="Occupancy Rate"
          value={`${metrics.occupancyRate}%`}
          trend={2.1}
          icon={<TrendingUpIcon className="h-5 w-5 text-primary" />}
          chartData={[75, 78, 80, 79, 82, 85, 87]}
        />
        <MetricCard
          title="Active Leads"
          value={metrics.activeLeads.toString()}
          trend={-3.4}
          icon={<UsersIcon className="h-5 w-5 text-primary" />}
          chartData={[62, 58, 55, 60, 58, 52, 56]}
        />
        <MetricCard
          title="Pipeline Value"
          value={`$${metrics.pipelineValue}M`}
          trend={8.7}
          icon={<DollarSignIcon className="h-5 w-5 text-primary" />}
          chartData={[3.2, 3.5, 3.8, 3.6, 3.9, 4.0, 4.2]}
        />
        <MetricCard
          title="Maintenance Tickets"
          value={metrics.maintenanceTickets.toString()}
          trend={-12.5}
          icon={<WrenchIcon className="h-5 w-5 text-primary" />}
          chartData={[25, 22, 20, 24, 21, 19, 18]}
        />
      </div>
    </div>
  );
};

export default MetricsOverview;
