import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const CaseDistribution = () => {
  const data = [
    { name: 'Criminal', value: 25 },
    { name: 'Civil', value: 30 },
    { name: 'Corporate', value: 25 },
    { name: 'Family', value: 20 },
  ];

  const COLORS = ['#3B82F6', '#EF4444', '#8B5CF6', '#10B981'];

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1E293B',
              border: 'none',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CaseDistribution;