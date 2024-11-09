import { Button } from "@/components/ui/button";
import { Search, FileText, List, MoreHorizontal } from "lucide-react";

interface QuickActionsProps {
  onAction: (action: string) => void;
  disabled?: boolean;
}

const QuickActions = ({ onAction, disabled }: QuickActionsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("lookup")}
        disabled={disabled}
        className="bg-sally-slate/20 border-sally-slate/30 hover:bg-sally-slate/30"
      >
        <Search className="w-4 h-4 mr-2" />
        Case Lookup
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("analyze")}
        disabled={disabled}
        className="bg-sally-slate/20 border-sally-slate/30 hover:bg-sally-slate/30"
      >
        <FileText className="w-4 h-4 mr-2" />
        Document Analysis
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("summary")}
        disabled={disabled}
        className="bg-sally-slate/20 border-sally-slate/30 hover:bg-sally-slate/30"
      >
        <List className="w-4 h-4 mr-2" />
        Case Summary
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("more")}
        disabled={disabled}
        className="bg-sally-slate/20 border-sally-slate/30 hover:bg-sally-slate/30"
      >
        <MoreHorizontal className="w-4 h-4 mr-2" />
        More Options
      </Button>
    </div>
  );
};

export default QuickActions;