import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Work Log System</h1>
        <nav className="space-x-4">
          <Button variant="ghost">Dashboard</Button>
          <Button variant="ghost">Báo cáo</Button>
          <Button variant="ghost">Cài đặt</Button>
        </nav>
      </div>
    </header>
  );
}