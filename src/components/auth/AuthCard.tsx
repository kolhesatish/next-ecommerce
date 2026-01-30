import { Card, CardContent } from "@/components/ui/card";

export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="w-full max-w-md border-muted shadow-lg">
      <CardContent className="p-8">{children}</CardContent>
    </Card>
  );
}
