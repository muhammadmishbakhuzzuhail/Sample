const StatusEmployee = ({ kondisi }) => {
    const bgColor = kondisi === "Active" ? "bg-green-200" : "bg-gray-200";
    const textColor = kondisi === "Active" ? "text-green-500" : "text-gray-500";
    return (
        <>
            <div
                className={`${textColor} ${bgColor} p-1 rounded-md text-xs m-0`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dot"
                    viewBox="0 0 16 16"
                    className="inline"
                >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                {kondisi}
            </div>
            <a
                href="#"
                className="flex justify-center items-center bg-white opacity-80 rounded-sm p-[2px] shadow-md"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 512"
                    width="12"
                    height="12"
                    className="rotate-90"
                >
                    <path
                        fill="#000"
                        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                    />
                </svg>
            </a>
        </>
    );
};
export default StatusEmployee;
