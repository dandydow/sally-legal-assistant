import { Button } from "@/components/ui/button";
import { Search, FileText, List, MoreHorizontal } from "lucide-react";

interface QuickActionsProps {
  onAction: (action: string) => void;
  disabled?: boolean;
}

const QuickActions = ({ onAction, disabled }: QuickActionsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("lookup")}
        disabled={disabled}
      >
        <Search className="w-4 h-4 mr-2" />
        Case Lookup
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("analyze")}
        disabled={disabled}
      >
        <FileText className="w-4 h-4 mr-2" />
        Document Analysis
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("summary")}
        disabled={disabled}
      >
        <List className="w-4 h-4 mr-2" />
        Case Summary
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("more")}
        disabled={disabled}
      >
        <MoreHorizontal className="w-4 h-4 mr-2" />
        More Options
      </Button>
    </div>
  );
};

export default QuickActions;