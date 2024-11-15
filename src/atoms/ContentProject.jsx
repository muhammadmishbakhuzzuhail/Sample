const ContentProject = ({judul, deskripsi}) => {
    return (
        <div>
            <div className="text-base text-slate-900 font-semibold">{judul}</div>
            <div className="text-xs line-clamp-1  font-medium text-gray-700">{deskripsi}</div>
        </div>
    )
}
export default ContentProject