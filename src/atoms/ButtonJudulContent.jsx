const ButtonJudulContent = ({svg, text}) => {
    return (
        <button className="border-gray-200 border-solid border-[1px] font-medium xl:text-xs text-[10px] p-1 hover:shadow-sm hover:xl:shadow-md flex justify-between items-center space-x-1 rounded-sm">
            {svg}
            <span className="text-gray-500 ">{text}</span>
        </button>
    );
};

export default ButtonJudulContent;
