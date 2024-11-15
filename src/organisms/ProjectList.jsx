import ContentProject from "../atoms/ContentProject";
import StatusProject from "../atoms/StatusProject";
import Tanggal from "../atoms/Tanggal";
import ProfilProject from "../molecules/ProfilProject";
import ImgProject from "./../atoms/ImgProject";

const ProjectList = ({ img, status, judul, deskripsi, profil, tanggal }) => {
    return (
        <div className="p-2 flex flex-row space-x-2 border-gray-100 shadow-md border rounded-md w-full mb-2 h-32">
            <ImgProject img={img} />
            <div className="flex flex-col flex-1">
                <div className="inline">
                    <StatusProject status={status} />
                </div>
                <ContentProject
                    judul={judul}
                    deskripsi={deskripsi}
                />
                <div className="flex justify-between items-center mt-auto flex-row space-x-1">
                    <ProfilProject profil={profil}/>
                    <Tanggal tanggal={tanggal} />
                </div>
            </div>
        </div>
    );
};
export default ProjectList;
