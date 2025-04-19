import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SubmoduleTabs, SubmoduleContent } from "@/components/ui/tabs-custom";

interface SubmoduleLayoutProps {
  moduleName: string;
  tabs: { id: string; label: string }[];
  children: React.ReactNode | ((activeTab: string) => React.ReactNode);
  defaultTab?: string;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

const SubmoduleLayout: React.FC<SubmoduleLayoutProps> = ({
  moduleName,
  tabs,
  children,
  defaultTab,
  actionButton,
  className,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTab || tabs[0]?.id || "",
  );

  return (
    <div className={`flex flex-col h-full bg-background ${className || ""}`}>
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 bg-muted/10 border-b">
        <h1 className="text-2xl font-bold">{moduleName}</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Theme
          </Button>
          <Button variant="outline" size="sm">
            Profile
          </Button>
        </div>
      </div>

      {/* Submodule Tabs */}
      <div className="p-4 bg-muted/5">
        <SubmoduleTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4 overflow-hidden">
        <SubmoduleContent
          className="h-full"
          actionButton={
            actionButton && (
              <Button onClick={actionButton.onClick}>
                {actionButton.label}
              </Button>
            )
          }
        >
          {typeof children === "function" ? children(activeTab) : children}
        </SubmoduleContent>
      </div>
    </div>
  );
};

export default SubmoduleLayout;
