import { Card } from "@/components/ui/card";

const TaskList = () => {
  const tasks = [
    { id: 'T1', client: 'Smith vs. State', amount: '60,000', status: 'active' },
    { id: 'T3', client: 'Johnson Estate', amount: '40,200', status: 'pending' },
    { id: 'T9', client: 'Corporate Merger A', amount: '70,450', status: 'pending' },
    { id: 'T7', client: 'Family Trust B', amount: '23,000', status: 'pending' },
    { id: 'T2', client: 'Real Estate Deal C', amount: '6,200', status: 'pending' },
    { id: 'T4', client: 'Insurance Claim D', amount: '13,600', status: 'pending' },
  ];

  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <Card 
          key={task.id}
          className={`p-4 flex items-center justify-between ${
            task.status === 'active' 
              ? 'bg-sally-azure/20 border-sally-azure' 
              : 'bg-sally-slate/20'
          }`}
        >
          <div className="flex items-center gap-4">
            <span className={`text-lg font-semibold ${
              task.status === 'active' ? 'text-sally-azure' : 'text-sally-silver'
            }`}>{task.id}</span>
            <span className="text-sally-silver">{task.client}</span>
          </div>
          <div className="text-right">
            <span className="text-sally-silver">${task.amount}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;