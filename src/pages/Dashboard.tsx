import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import CaseOverview from "@/components/dashboard/CaseOverview";
import Sidebar from "@/components/dashboard/Sidebar";
import UserProfile from "@/components/dashboard/UserProfile";
import { ChartBar } from "lucide-react";

const Dashboard = () => {
  const { data: caseStats, isLoading } = useQuery({
    queryKey: ["caseStats"],
    queryFn: async () => {
      // Simulated API call
      return {
        totalCases: 24,
        urgentCases: 5,
        upcomingDeadlines: 3,
        completedCases: 18,
      };
    },
  });

  return (
    <div className="flex h-screen bg-sally-navy">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <UserProfile />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <CaseOverview stats={caseStats} isLoading={isLoading} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-sally-slate/20">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ChartBar className="w-5 h-5" />
                Case Progress
              </h3>
              <Progress value={75} className="h-2" />
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;