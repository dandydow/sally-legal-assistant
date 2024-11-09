import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const UserProfile = () => {
  return (
    <Card className="p-6 bg-sally-slate/20">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-sally-silver">Senior Attorney</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-sm text-sally-silver">Active Cases</p>
          <p className="text-2xl font-semibold">24</p>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;