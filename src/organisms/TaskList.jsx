import StatusTask from "../atoms/StatusTask";
import Tanggal from "../atoms/Tanggal";
const TaskList = ({ status, text, tanggal }) => {
    const bg = status === "Completed" ? "bg-green-100" : "bg-yellow-100";
    return (
        <div
            className={`p-2 text-sm text-black flex flex-col justify-between ${bg} rounded-sm h-32 `}
        >
            <div className="space-y-1">
                <StatusTask status={status} />
                <div className="line-clamp-2 font-semibold text-gray-700">
                    {text}
                </div>
            </div>
            <Tanggal tanggal={tanggal} />
        </div>
    );
};

export default TaskList;
