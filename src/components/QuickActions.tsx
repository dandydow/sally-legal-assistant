import { Button } from "@/components/ui/button";
import { Search, FileText, List, MoreHorizontal } from "lucide-react";

interface QuickActionsProps {
  onAction: (action: string) => void;
  disabled?: boolean;
}

const QuickActions = ({ onAction, disabled }: QuickActionsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("lookup")}
        disabled={disabled}
        className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-200"
      >
        <Search className="w-4 h-4 mr-2" />
        Case Lookup
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("analyze")}
        disabled={disabled}
        className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-200"
      >
        <FileText className="w-4 h-4 mr-2" />
        Document Analysis
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("summary")}
        disabled={disabled}
        className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-200"
      >
        <List className="w-4 h-4 mr-2" />
        Case Summary
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("more")}
        disabled={disabled}
        className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-200"
      >
        <MoreHorizontal className="w-4 h-4 mr-2" />
        More Options
      </Button>
    </div>
  );
};

export default QuickActions;