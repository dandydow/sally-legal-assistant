import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface CaseStats {
  totalCases: number;
  urgentCases: number;
  upcomingDeadlines: number;
  completedCases: number;
}

interface CaseOverviewProps {
  stats?: CaseStats;
  isLoading: boolean;
}

const CaseOverview = ({ stats, isLoading }: CaseOverviewProps) => {
  const items = [
    { label: "Total Cases", value: stats?.totalCases },
    { label: "Urgent Cases", value: stats?.urgentCases },
    { label: "Upcoming Deadlines", value: stats?.upcomingDeadlines },
    { label: "Completed Cases", value: stats?.completedCases },
  ];

  return (
    <>
      {items.map((item) => (
        <Card key={item.label} className="p-6 bg-sally-slate/20">
          <h3 className="text-sm text-sally-silver">{item.label}</h3>
          {isLoading ? (
            <Skeleton className="h-8 w-16 mt-2" />
          ) : (
            <p className="text-2xl font-semibold mt-2">{item.value}</p>
          )}
        </Card>
      ))}
    </>
  );
};

export default CaseOverview;