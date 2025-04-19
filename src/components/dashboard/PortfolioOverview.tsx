import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Building,
  Home,
  ChevronRight,
  Filter,
  ArrowUpRight,
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  value: string;
  units: number;
  occupancy: number;
  status: "active" | "planning" | "completed";
  thumbnail: string;
}

const PortfolioOverview = () => {
  const [view, setView] = useState<"map" | "list">("map");
  const [filter, setFilter] = useState<string>("all");

  // Mock data for portfolio projects
  const projects: Project[] = [
    {
      id: "1",
      name: "Skyline Towers",
      location: "Downtown Metro",
      type: "Residential",
      value: "$42.5M",
      units: 120,
      occupancy: 85,
      status: "active",
      thumbnail:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    },
    {
      id: "2",
      name: "Riverside Villas",
      location: "Waterfront District",
      type: "Residential",
      value: "$38.2M",
      units: 45,
      occupancy: 92,
      status: "active",
      thumbnail:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    },
    {
      id: "3",
      name: "Metro Business Park",
      location: "Financial District",
      type: "Commercial",
      value: "$67.8M",
      units: 35,
      occupancy: 78,
      status: "active",
      thumbnail:
        "https://images.unsplash.com/photo-1577760258779-e787a1733016?w=600&q=80",
    },
    {
      id: "4",
      name: "Sunset Heights",
      location: "Coastal Region",
      type: "Mixed Use",
      value: "$54.1M",
      units: 88,
      occupancy: 65,
      status: "planning",
      thumbnail:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    },
  ];

  // Filter projects based on selected filter
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.type.toLowerCase() === filter.toLowerCase(),
        );

  // Calculate portfolio summary
  const portfolioValue = projects.reduce(
    (sum, project) =>
      sum + parseFloat(project.value.replace("$", "").replace("M", "")),
    0,
  );
  const totalUnits = projects.reduce((sum, project) => sum + project.units, 0);
  const avgOccupancy =
    projects.reduce((sum, project) => sum + project.occupancy, 0) /
    projects.length;

  // Distribution by property type
  const propertyTypes = [...new Set(projects.map((project) => project.type))];
  const typeDistribution = propertyTypes.map((type) => {
    const typeProjects = projects.filter((project) => project.type === type);
    const typeValue = typeProjects.reduce(
      (sum, project) =>
        sum + parseFloat(project.value.replace("$", "").replace("M", "")),
      0,
    );
    return {
      type,
      value: typeValue,
      percentage: Math.round((typeValue / portfolioValue) * 100),
    };
  });

  return (
    <Card className="w-full bg-white dark:bg-slate-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Portfolio Overview</CardTitle>
        <div className="flex items-center gap-2">
          <Tabs
            value={view}
            onValueChange={(v) => setView(v as "map" | "list")}
            className="mr-2"
          >
            <TabsList className="grid w-[180px] grid-cols-2">
              <TabsTrigger value="map" className="flex items-center gap-1">
                <MapPin className="h-4 w-4" /> Map View
              </TabsTrigger>
              <TabsTrigger value="list" className="flex items-center gap-1">
                <Building className="h-4 w-4" /> List View
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Filter className="h-4 w-4" /> Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - Map or List view */}
          <div className="md:col-span-2">
            <Tabs value={view}>
              <TabsContent value="map" className="mt-0">
                <div className="relative h-[250px] rounded-md overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  {/* Placeholder for map - would be replaced with actual map component */}
                  <div className="text-center text-slate-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-slate-400" />
                    <p>Interactive map with project locations</p>
                    <p className="text-sm">4 properties across 3 regions</p>
                  </div>

                  {/* Project markers - would be positioned on actual map */}
                  <div className="absolute top-1/4 left-1/4 bg-primary text-white p-1 rounded-full">
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-white text-black text-xs p-1 rounded whitespace-nowrap">
                      Skyline Towers
                    </div>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-1/3 right-1/3 bg-primary text-white p-1 rounded-full">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="list" className="mt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Button
                        variant={filter === "all" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilter("all")}
                      >
                        All
                      </Button>
                      {propertyTypes.map((type) => (
                        <Button
                          key={type}
                          variant={
                            filter === type.toLowerCase()
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() => setFilter(type.toLowerCase())}
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {filteredProjects.length} projects
                    </span>
                  </div>

                  <div className="space-y-3">
                    {filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        className="flex items-center gap-4 p-3 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={project.thumbnail}
                            alt={project.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium truncate">
                              {project.name}
                            </h3>
                            <Badge
                              variant={
                                project.status === "active"
                                  ? "default"
                                  : project.status === "planning"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            {project.location}
                          </div>
                          <div className="flex items-center justify-between mt-1 text-sm">
                            <span>
                              {project.value} • {project.units} units
                            </span>
                            <span className="text-green-600">
                              {project.occupancy}% occupied
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right column - Portfolio summary */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-slate-50 dark:bg-slate-700">
              <h3 className="font-medium mb-3">Portfolio Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Value</span>
                  <span className="font-semibold">
                    ${portfolioValue.toFixed(1)}M
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Units</span>
                  <span className="font-semibold">{totalUnits}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Avg. Occupancy</span>
                  <span className="font-semibold">
                    {avgOccupancy.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border dark:bg-slate-800">
              <h3 className="font-medium mb-3">Distribution by Type</h3>
              <div className="space-y-3">
                {typeDistribution.map((item) => (
                  <div key={item.type} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{item.type}</span>
                      <span className="text-sm font-medium">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full flex items-center justify-center gap-1">
              <span>View Full Portfolio</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioOverview;
