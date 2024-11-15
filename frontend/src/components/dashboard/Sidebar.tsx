import { Calendar, List, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { icon: List, label: "Priorities", path: "#priorities" },
    { icon: List, label: "Processes", path: "#processes" },
    { icon: Calendar, label: "Calendar", path: "#calendar" },
    { icon: Settings, label: "Settings", path: "#settings" },
  ];

  return (
    <aside className="w-64 bg-sally-slate/20 p-4 hidden md:block">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sally-slate/40 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;