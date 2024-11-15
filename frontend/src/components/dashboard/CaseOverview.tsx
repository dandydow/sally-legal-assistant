import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Users, XCircle, CheckCircle, BarChart } from "lucide-react";

interface CaseStats {
  totalCases: number;
  pendingCases: number;
  resolvedCases: number;
  successRate: number;
}

interface CaseOverviewProps {
  stats?: CaseStats;
  isLoading: boolean;
}

const CaseOverview = ({ stats, isLoading }: CaseOverviewProps) => {
  const mockData = Array(20).fill(null).map((_, i) => ({ value: Math.random() * 100 }));

  const items = [
    { 
      label: "Total Cases", 
      value: stats?.totalCases,
      icon: Users,
      color: "text-blue-500",
      chart: mockData
    },
    { 
      label: "Pending Review", 
      value: stats?.pendingCases,
      icon: XCircle,
      color: "text-rose-500",
      chart: mockData
    },
    { 
      label: "Resolved Cases", 
      value: stats?.resolvedCases,
      icon: CheckCircle,
      color: "text-emerald-500",
      chart: mockData
    },
    { 
      label: "Success Rate", 
      value: stats?.successRate ? `${stats.successRate}%` : undefined,
      icon: BarChart,
      color: "text-purple-500",
      chart: mockData
    },
  ];

  return (
    <>
      {items.map((item) => (
        <Card key={item.label} className="p-6 bg-sally-slate/20">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-sally-silver">{item.label}</p>
              {isLoading ? (
                <Skeleton className="h-8 w-16 mt-2" />
              ) : (
                <p className="text-2xl font-semibold mt-2">{item.value}</p>
              )}
            </div>
            <item.icon className={`w-5 h-5 ${item.color}`} />
          </div>
          <div className="h-[40px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={item.chart}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={item.color.replace('text-', 'rgb(')} 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      ))}
    </>
  );
};

export default CaseOverview;