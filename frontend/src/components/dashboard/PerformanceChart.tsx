import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PerformanceChart = () => {
  const performanceData = [
    { name: "Criminal Law Cases", progress: 82, type: "success" },
    { name: "Civil Law Cases", progress: 82, type: "info" },
    { name: "Family Law Cases", progress: 82, type: "success" },
    { name: "Corporate Law Cases", progress: 82, type: "success" },
    { name: "Real Estate Law", progress: 82, type: "info" },
  ];

  return (
    <div className="space-y-4">
      {performanceData.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-sally-silver">{item.name}</span>
            <span className="text-sally-silver">{item.progress}%</span>
          </div>
          <Progress 
            value={item.progress} 
            className={`h-2 ${item.type === 'success' ? 'bg-emerald-900' : 'bg-blue-900'}`}
          />
        </div>
      ))}
    </div>
  );
};

export default PerformanceChart;