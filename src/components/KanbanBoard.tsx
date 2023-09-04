import { useState } from "react";
import Plusicon from "../icons/Plusicon";
import { Column } from "../types";
import ColumnContainer from "./ColumnContainer";

const KanbanBoard = () => {
  const [columns, setColumn] = useState<Column[]>([]);
  console.log(columns);

  return (
    <div
      className="
    m-auto
    flex
    min-h-screen
    w-full
    items-center
    justify-center
    overflow-x-auto
    overflow-y-hidden
    px-[40px]"
    >
      <div className="m-auto flex gap-2">
        <div className="flex gap-4">
            {columns.map((col) => (
                <ColumnContainer column={col}/>
            ))}
        </div>
        <button
          onClick={() => CreateColumn()}
          className="
        h-[60px]
        w-[350px]
        min-w-[350px]
        curso-pointer
        rounded-lg
        bg-mainBackgroudColor
        boder-2
        border-columnBackgroudColor
        p-4
        ring-rose-500
        hover:ring-2
        flex
        gap-2"
        >
          <Plusicon /> Add Column
        </button>
      </div>
    </div>
  );

  function CreateColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumn([...columns, columnToAdd]);
  }
};

function generateId() {
  // generamos un id numero de manera randon
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;
