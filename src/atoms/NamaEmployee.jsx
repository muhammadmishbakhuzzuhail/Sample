const NamaEmployee = ({ profil, nama, job }) => {
    return (
        <>
            <img
                src={profil}
                alt=""
                className="rounded-full w-10 h-10"
            />
            <div className="ml-2">
                <div className="font-semibold text-sm text-gray-800">
                    {nama}
                </div>
                <div className="font-medium text-xs text-gray-500">{job}</div>
            </div>
        </>
    );
};
export default NamaEmployee;
