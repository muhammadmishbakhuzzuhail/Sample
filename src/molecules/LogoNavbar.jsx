import Kebab from "../atoms/Kebab";
import Nama from "../atoms/Nama";
import Logo from "../atoms/Logo";

const LogoNavbar = () => {
    const logo = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-command"
            viewBox="0 0 16 16"
        >
            <path d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3M6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5zm4 1v4H6V6zm1-1V3.5A1.5 1.5 0 1 1 12.5 5zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11z" />
        </svg>
    );
    const className = "rounded-full bg-violet-600 p-2 text-white object-center xl:scale-125";

    return (
        <div className="flex items-center space-x-2 mb-6 w-full">
            <Logo
                className={className}
                logo={logo}
            />
            <Nama />
            <Kebab />
        </div>
    );
};

export default LogoNavbar;
