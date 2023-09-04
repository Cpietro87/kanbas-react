import { Column } from "../types";

interface Props  {
    column: Column;
}

function ColumnContainer(props: Props) {
    const {column} = props;
  return (
    <div className="  
    bg-columnBackgroundColor
    opacity-40
    border-2
    border-pink-500
    w-[350px]
    h-[500px]
    max-h-[500px]
    rounded-md
    flex
    flex-col">
        {column.title}
        {/* columnas de tareas */}
        <div className="flex flex-grow">Content</div>
        <div>Footer</div>
        </div>
  )
}

export default ColumnContainer