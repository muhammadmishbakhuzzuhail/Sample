const StatusTask = ({ status }) => {
    const textColor =
        status === "Completed" ? "text-green-500" : "text-red-500";
    const borderColor =
        status === "Completed" ? "border-green-500" : "border-red-500";
    const shadowColor =
        status === "Completed"
            ? "shadow-[0_0_2px_1px_rgba(34,197,94,0.5)]"
            : "shadow-[0_0_2px_1px_rgba(239,68,68,0.5)]";
    return (
        <div className="flex justify-between items-center">
            <div
                className={`leading-[14px] px-1 font-light ${shadowColor} text-[10px] border-[1px] ${borderColor} rounded-sm drop-shadow-sm inline-block ${textColor} shadow-sm drop-shadow-sm`}
            >
                {status}
            </div>
            <button className="p-[2px] bg-white rounded-sm shadow-md">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 512"
                    width="12"
                    height="12"
                    style={{ transform: "rotate(90deg)" }}
                >
                    <path
                        fill="#000"
                        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default StatusTask;
