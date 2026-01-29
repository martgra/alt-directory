import { alternativeGroups } from "@/data/alternatives-grouped";

import { AlternativeGroupRow } from "./alternative-group-row";

export function AlternativesList() {
  return (
    <div className="space-y-4 bg-transparent md:space-y-0 md:overflow-hidden md:rounded-2xl md:border md:border-slate-200 md:bg-white md:shadow-sm">
      {alternativeGroups.map((group, index) => (
        <AlternativeGroupRow
          key={group.id}
          group={group}
          showSeparator={index < alternativeGroups.length - 1}
        />
      ))}
    </div>
  );
}
