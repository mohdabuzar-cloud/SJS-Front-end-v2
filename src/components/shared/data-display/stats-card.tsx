import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  icon?: ReactNode;
}

export default function StatsCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {value}
          </h3>
        </div>

        {icon && (
          <div className="text-slate-400">
            {icon}
          </div>
        )}
      </CardContent>
    </Card>
  );
}