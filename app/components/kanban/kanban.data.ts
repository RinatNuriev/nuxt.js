import { EnumStatus } from "~/types/deals.types";
import type { IColumn } from "./kanban.types";

export const KANBAN_DATA: IColumn[] = [
  { id: EnumStatus.todo, name: "Входящие", item: [] },
  { id: EnumStatus["to-be-agreed"], name: "На согласовании", item: [] },
  { id: EnumStatus["in-progress"], name: "В производстве", item: [] },
  { id: EnumStatus.produced, name: "Произведено", item: [] },
  { id: EnumStatus.done, name: "К отгрузке", item: [] },
];
