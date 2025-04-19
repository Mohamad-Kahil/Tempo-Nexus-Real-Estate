import React, { useState } from "react";
import { SubmoduleTabs, SubmoduleContent } from "@/components/ui/tabs-custom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Filter,
  Map,
  List,
  GanttChart,
  Search,
  Download,
  FileText,
  BarChart4,
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  location: string;
  status: "planning" | "in-progress" | "completed" | "on-hold";
  units: number;
  budget: string;
  completion: number;
}

const sampleProjects: Project[] = [
  {
    id: "p1",
    name: "Riverside Towers",
    location: "Downtown, Metro City",
    status: "in-progress",
    units: 124,
    budget: "$24.5M",
    completion: 45,
  },
  {
    id: "p2",
    name: "Oakwood Residences",
    location: "North Hills, Metro City",
    status: "planning",
    units: 86,
    budget: "$18.2M",
    completion: 10,
  },
  {
    id: "p3",
    name: "Sunset Heights",
    location: "West End, Metro City",
    status: "completed",
    units: 210,
    budget: "$32.7M",
    completion: 100,
  },
  {
    id: "p4",
    name: "Marina Bay Condos",
    location: "Harbor District, Metro City",
    status: "on-hold",
    units: 68,
    budget: "$15.8M",
    completion: 35,
  },
];

const getStatusColor = (status: Project["status"]) => {
  switch (status) {
    case "planning":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "in-progress":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
    case "completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "on-hold":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const ProjectListView = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search transactions..."
              className="w-full rounded-md border border-gray-700 bg-gray-800 pl-8 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-700 bg-transparent text-gray-200 hover:bg-gray-800"
          >
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-end">
          <Button
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <FileText className="h-4 w-4 mr-2" /> Accounts Payable
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <FileText className="h-4 w-4 mr-2" /> Accounts Receivable
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-700 text-gray-200 hover:bg-gray-800"
          >
            <Download className="h-4 w-4 mr-2" /> Export
          </Button>
          <Button
            size="sm"
            className="bg-primary text-white hover:bg-primary/90"
          >
            <Plus className="h-4 w-4 mr-2" /> Add Transaction
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-nexus-dark-sidebar/30 border-gray-800">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Total Payable</p>
                <h3 className="text-2xl font-bold mt-1">$124,568.00</h3>
                <p className="text-xs text-green-400 mt-1">
                  +2.5% from last month
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-500/10">
                <BarChart4 className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-nexus-dark-sidebar/30 border-gray-800">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Total Receivable</p>
                <h3 className="text-2xl font-bold mt-1">$89,342.00</h3>
                <p className="text-xs text-red-400 mt-1">
                  -1.2% from last month
                </p>
              </div>
              <div className="p-3 rounded-full bg-purple-500/10">
                <BarChart4 className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-nexus-dark-sidebar/30 border-gray-800">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Pending Approvals</p>
                <h3 className="text-2xl font-bold mt-1">12</h3>
                <p className="text-xs text-amber-400 mt-1">4 high priority</p>
              </div>
              <div className="p-3 rounded-full bg-amber-500/10">
                <FileText className="h-6 w-6 text-amber-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="overflow-hidden rounded-md border border-gray-800">
        <table className="w-full">
          <thead className="bg-nexus-light-tableHeader dark:bg-nexus-dark-tableHeader text-nexus-light-tableHeaderText dark:text-nexus-dark-tableHeaderText">
            <tr>
              <th className="text-left p-3 font-medium">Vendor</th>
              <th className="text-left p-3 font-medium">Invoice #</th>
              <th className="text-left p-3 font-medium">Date</th>
              <th className="text-left p-3 font-medium">Due Date</th>
              <th className="text-right p-3 font-medium">Amount</th>
              <th className="text-left p-3 font-medium">Status</th>
              <th className="text-center p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleProjects.map((project) => (
              <tr
                key={project.id}
                className="border-t border-gray-800 hover:bg-nexus-light-tableRowHover dark:hover:bg-nexus-dark-tableRowHover"
              >
                <td className="p-3">{project.name}</td>
                <td className="p-3">INV-2023-{project.id}</td>
                <td className="p-3">6/1/2023</td>
                <td className="p-3">7/1/2023</td>
                <td className="p-3 text-right font-medium">
                  ${(project.units * 100).toLocaleString()}
                </td>
                <td className="p-3">
                  <Badge
                    className={`${
                      project.status === "planning"
                        ? "bg-nexus-light-statusPending/20 text-nexus-light-statusPending"
                        : project.status === "in-progress"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                          : project.status === "completed"
                            ? "bg-nexus-light-statusPaid/20 text-nexus-light-statusPaid"
                            : "bg-nexus-light-statusOverdue/20 text-nexus-light-statusOverdue"
                    }`}
                  >
                    {project.status === "planning"
                      ? "pending"
                      : project.status === "in-progress"
                        ? "in progress"
                        : project.status === "completed"
                          ? "paid"
                          : "overdue"}
                  </Badge>
                </td>
                <td className="p-3 text-center">
                  <div className="flex justify-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-gray-100"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                      >
                        <path
                          d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-gray-100"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                      >
                        <path
                          d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4H3.5C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ProjectMapView = () => {
  return (
    <div className="h-full flex items-center justify-center bg-nexus-dark-sidebar/30 rounded-md border border-gray-800">
      <div className="text-center">
        <BarChart4 className="h-12 w-12 mx-auto text-primary/60" />
        <h3 className="mt-4 text-lg font-medium">Financial Analytics</h3>
        <p className="mt-2 text-sm text-gray-400 max-w-md mx-auto">
          Financial analytics and visualization dashboard would be displayed
          here.
        </p>
        <Button
          variant="outline"
          className="mt-4 border-gray-700 text-gray-200 hover:bg-gray-800"
        >
          Configure Analytics
        </Button>
      </div>
    </div>
  );
};

const ProjectGanttView = () => {
  return (
    <div className="h-full flex items-center justify-center bg-nexus-dark-sidebar/30 rounded-md border border-gray-800">
      <div className="text-center">
        <FileText className="h-12 w-12 mx-auto text-primary/60" />
        <h3 className="mt-4 text-lg font-medium">Financial Reports</h3>
        <p className="mt-2 text-sm text-gray-400 max-w-md mx-auto">
          Generate and view financial reports, statements, and tax documents.
        </p>
        <Button
          variant="outline"
          className="mt-4 border-gray-700 text-gray-200 hover:bg-gray-800"
        >
          Generate Report
        </Button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("list");

  const tabs = [
    { id: "list", label: "Transactions" },
    { id: "map", label: "Analytics" },
    { id: "gantt", label: "Reports" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "list":
        return <ProjectListView />;
      case "map":
        return <ProjectMapView />;
      case "gantt":
        return <ProjectGanttView />;
      default:
        return <ProjectListView />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            AP/AR Management
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage your financial transactions and reporting
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-700 text-gray-200 hover:bg-gray-800"
          >
            <Download className="h-4 w-4 mr-2" /> Export Data
          </Button>
          <Button
            size="sm"
            className="bg-primary text-white hover:bg-primary/90"
          >
            <Plus className="h-4 w-4 mr-2" /> New Transaction
          </Button>
        </div>
      </div>

      <div className="p-2 bg-nexus-light-sidebar/20 dark:bg-nexus-dark-sidebar/20 rounded-md">
        <SubmoduleTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      <SubmoduleContent className="h-[calc(100vh-320px)] bg-transparent border-gray-800">
        {renderContent()}
      </SubmoduleContent>
    </div>
  );
};

export default Projects;
