import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tabVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        active: "bg-primary text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabVariants> {
  active?: boolean;
}

const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ className, variant, active, ...props }, ref) => {
    return (
      <button
        className={cn(
          tabVariants({ variant: active ? "active" : variant, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Tab.displayName = "Tab";

export interface SubmoduleTabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

const SubmoduleTabs = ({
  tabs,
  activeTab,
  onTabChange,
  className,
}: SubmoduleTabsProps) => {
  return (
    <div className={cn("flex space-x-2 p-2 rounded-md", className)}>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          active={activeTab === tab.id}
          variant="ghost"
          onClick={() => onTabChange(tab.id)}
          className={
            activeTab === tab.id ? "" : "text-gray-400 hover:text-white"
          }
        >
          {tab.label}
        </Tab>
      ))}
    </div>
  );
};

export interface SubmoduleContentProps {
  children: React.ReactNode;
  className?: string;
  actionButton?: React.ReactNode;
}

const SubmoduleContent = ({
  children,
  className,
  actionButton,
}: SubmoduleContentProps) => {
  return (
    <div
      className={cn(
        "relative bg-background rounded-md border border-gray-800 p-4",
        className,
      )}
    >
      <div className="overflow-auto max-h-full">{children}</div>
      {actionButton && (
        <div className="absolute bottom-4 right-4">{actionButton}</div>
      )}
    </div>
  );
};

export { Tab, SubmoduleTabs, SubmoduleContent, tabVariants };
