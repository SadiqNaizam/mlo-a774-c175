import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * Props for the StatCard component.
 */
interface StatCardProps {
  /** The main title of the card (e.g., 'Total Revenue'). */
  title: string;
  /** The primary value to display (e.g., '$45,231.89'). */
  value: string;
  /** An optional icon component from a library like lucide-react. */
  icon: React.ReactNode;
  /** An optional description or sub-metric (e.g., '+20.1% from last month'). */
  description?: string;
  /** The direction of the trend, used to color the description text. */
  trend?: 'up' | 'down' | 'neutral';
}

/**
 * A custom card component to display a single Key Performance Indicator (KPI).
 * It includes a title, a large numerical value, an icon, and an optional
 * sub-metric showing a percentage change or trend.
 */
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  description,
  trend = 'neutral',
}) => {
  console.log('StatCard loaded for:', title);

  const trendColorClasses = {
    up: 'text-emerald-600 dark:text-emerald-500',
    down: 'text-red-600 dark:text-red-500',
    neutral: 'text-muted-foreground',
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className={cn("text-xs", trendColorClasses[trend])}>
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;