import NamaEmployee from "../atoms/NamaEmployee";
import NegaraEmployee from "../atoms/NegaraEmployee";
import StatusEmployee from "./../atoms/StatusEmployee";

const EmployeeListBody = ({ profil, nama, job, bendera, negara, kondisi }) => {
    return (
        <div className="w-full h-1/4 bg-white flex mb-2 box-border shadow-sm border border-gray-100 rounded-md">
            <div className="flex-1 flex flex-row items-center box-border pl-2">
                <NamaEmployee
                    profil={profil}
                    nama={nama}
                    job={job}
                />
            </div>
            <div className="flex-1 flex items-center   space-x-2 p-2 ml-4">
                <NegaraEmployee
                    bendera={bendera}
                    negara={negara}
                />
            </div>
            <div className="flex-1 flex items-center justify-between pr-2">
                <StatusEmployee kondisi={kondisi} />
            </div>
        </div>
    );
};
export default EmployeeListBody;
