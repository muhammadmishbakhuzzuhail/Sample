const ProfilProject = ({ profil }) => {
    const listImg = profil.slice(0, 3);
    const sisa = profil.length > 3 ? profil.length - 3 : 0;

    return (
        <div className="flex flex-row ">
            {listImg[0] && (
                <div className="inline-block rounded-full  border-slate-50 border-[1px] z-0">
                    <img
                        src={listImg[0]}
                        alt="Profile 1"
                        className="w-4 h-4 rounded-full"
                    />
                </div>
            )}
            {listImg[1] && (
                <div className="inline-block rounded-full border-[1px] border-slate-50 z-10 -translate-x-[3px]">
                    <img
                        src={listImg[1]}
                        alt="Profile 2"
                        className="w-4 h-4 rounded-full"
                    />
                </div>
            )}
            {listImg[2] && (
                <div className="inline-block rounded-full border-[1px] border-slate-50 z-20 -translate-x-[6px]">
                    <img
                        src={listImg[2]}
                        alt="Profile 3"
                        className="w-4 h-4 rounded-full"
                    />
                </div>
            )}
            {sisa > 0 && (
                <span className="text-gray-500 font-medium text-xs">
                    +{sisa}
                </span>
            )}
        </div>
    );
};
export default ProfilProject;
