import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import CaseOverview from "@/components/dashboard/CaseOverview";
import Sidebar from "@/components/dashboard/Sidebar";
import UserProfile from "@/components/dashboard/UserProfile";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import CaseDistribution from "@/components/dashboard/CaseDistribution";
import TaskList from "@/components/dashboard/TaskList";
import { Calendar } from "@/components/ui/calendar";

const Dashboard = () => {
  const { data: caseStats, isLoading } = useQuery({
    queryKey: ["caseStats"],
    queryFn: async () => {
      // Simulated API call
      return {
        totalCases: 46,
        pendingCases: 12,
        resolvedCases: 20,
        successRate: 60,
      };
    },
  });

  return (
    <div className="flex h-screen bg-sally-navy">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <CaseOverview stats={caseStats} isLoading={isLoading} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-sally-slate/20">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Last Week's Performance</h3>
                <button className="text-sally-azure hover:text-sally-azure/80">MORE</button>
              </div>
              <PerformanceChart />
            </Card>

            <Card className="p-6 bg-sally-slate/20">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Case Distribution</h3>
                <button className="text-sally-azure hover:text-sally-azure/80">Last week</button>
              </div>
              <CaseDistribution />
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="p-6 bg-sally-slate/20">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Priority Cases</h3>
                  <button className="text-sally-azure hover:text-sally-azure/80">Global</button>
                </div>
                <TaskList />
              </Card>
            </div>

            <div className="space-y-6">
              <UserProfile />
              <Card className="p-6 bg-sally-slate/20">
                <Calendar mode="single" className="rounded-md" />
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;