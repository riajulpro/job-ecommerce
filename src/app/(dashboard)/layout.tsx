import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="bg-gray-100 p-3">
        <div className="content">
          <Link href="/">
            <Button>Home</Button>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
