import { Card } from "@/components/ui/card";
import { alternativeGroups } from "@/data/alternatives-grouped";

import { AlternativeGroupRow } from "./alternative-group-row";

export function AlternativesList() {
  return (
    <Card>
      {alternativeGroups.map((group, index) => (
        <AlternativeGroupRow
          key={group.id}
          group={group}
          showSeparator={index < alternativeGroups.length - 1}
        />
      ))}
    </Card>
  );
}
