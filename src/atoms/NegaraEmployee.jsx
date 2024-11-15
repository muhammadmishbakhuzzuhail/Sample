const NegaraEmployee = ({ bendera, negara }) => {
    return (
        <>
            <img
                src={bendera}
                alt=""
                className="rounded-full w-4 h-4"
            />
            <span className="font-semibold text-gray-600 text-sm">
                {" "}
                {negara}
            </span>
        </>
    );
};
export default NegaraEmployee;
