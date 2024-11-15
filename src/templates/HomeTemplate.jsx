import HeaderHome from "./HeaderHome";
import AreaChartComponents from "./AreaChart";
import JudulContent from "../molecules/JudulContent";
import TaskList from "../organisms/TaskList";
import ProjectList from "../organisms/ProjectList";

import PhoneImg from "../assets/images/phone1.jpg";
import LaptopImg from "../assets/images/laptop.jpg";

import profil1 from "../assets/images/profil-1.jpg";
import profil2 from "../assets/images/profil-2.jpg";
import profil3 from "../assets/images/profil-3.jpg";
import profil4 from "../assets/images/profil-4.jpg";
import profil5 from "../assets/images/profil-5.jpg";

import bendera1 from "../assets/images/bendera-1.png";
import bendera2 from "../assets/images/bendera-2.png";
import bendera3 from "../assets/images/bendera-3.png";
import bendera4 from "../assets/images/bendera-4.png";
import bendera5 from "../assets/images/bendera-5.png";
import EmployeeListBody from "../organisms/EmployeeListBody";
import EmployeeListHeader from "./../organisms/EmployeListHeader";

const HomeTemplates = () => {
    const paymentsInsight = {
        href: "#",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-credit-card-fill"
                viewBox="0 0 16 16"
            >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1" />
            </svg>
        ),
        text: "Payments Insight",
        className:
            "font-bold text-sm flex space-x-2 items-center text-gray-700",
        svgButton: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
                className="text-gray-500"
            >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
        ),
        textButton: "6 Month",
    };
    const task = {
        href: "#",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list-ul"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                />
            </svg>
        ),
        text: "Tasks(5)",
        className:
            "font-bold text-sm flex space-x-2 items-center text-gray-700",
        textButton: "See All",
    };
    const listTask = [
        {
            status: "Todo",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, quibusdam.",
            tanggal: "20 September 2023",
        },
        {
            status: "Completed",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat et praesentium id esse quod at, reprehenderit non nihil ab?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum tempora esse voluptates commodi vero ad. Vel doloremque modi voluptatibus laudantium ipsam porro harum eos ratione, alias libero maxime deserunt, distinctio maiores. Facere hic, veniam, dolorem autem reiciendis quis impedit suscipit, repellendus dolor voluptatum recusandae laborum in delectus vero maiores.",
            tanggal: "20 September 2023",
        },
        {
            status: "Todo",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, quibusdam.",
            tanggal: "20 September 2023",
        },
        {
            status: "Completed",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat et praesentium id esse quod at, reprehenderit non nihil ab?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum tempora esse voluptates commodi vero ad. Vel doloremque modi voluptatibus laudantium ipsam porro harum eos ratione, alias libero maxime deserunt, distinctio maiores. Facere hic, veniam, dolorem autem reiciendis quis impedit suscipit, repellendus dolor voluptatum recusandae laborum in delectus vero maiores.",
            tanggal: "20 September 2023",
        },
    ];
    const currentProjects = {
        href: "#",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive"
                viewBox="0 0 16 16"
            >
                <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
            </svg>
        ),
        text: "Current projects",
        className:
            "font-bold text-sm flex space-x-2 items-center text-gray-700",
        textButton: "See All",
    };
    const employee = {
        href: "#",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
            >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
        ),
        text: "Employee",
        className:
            "font-bold text-sm flex space-x-2 items-center text-gray-700",
        textButton: "See All",
    };
    const listCurrentProjects = [
        {
            img: PhoneImg,
            status: "In progress",
            judul: "Plannerie Homepage",
            deskripsi: "was to design an easy to use website",
            profil: [profil1, profil2, profil3],
            tanggal: "Due: Oct 2021",
        },
        {
            img: LaptopImg,
            status: "In review",
            judul: "Nusales - User Dashboard",
            deskripsi: "was to design an easy to use website",
            profil: [profil3, profil4, profil5, profil1, profil2],
            tanggal: "Due: Oct 2021",
        },
        {
            img: PhoneImg,
            status: "In progress",
            judul: "Plannerie Homepage",
            deskripsi: "was to design an easy to use website",
            profil: [profil1, profil2, profil3],
            tanggal: "Due: Oct 2021",
        },
        {
            img: LaptopImg,
            status: "In review",
            judul: "Nusales - User Dashboard",
            deskripsi: "was to design an easy to use website",
            profil: [profil3, profil4, profil5, profil1, profil2],
            tanggal: "Due: Oct 2021",
        },
        {
            img: PhoneImg,
            status: "In progress",
            judul: "Plannerie Homepage",
            deskripsi: "was to design an easy to use website",
            profil: [profil1, profil2, profil3],
            tanggal: "Due: Oct 2021",
        },
        {
            img: LaptopImg,
            status: "In review",
            judul: "Nusales - User Dashboard",
            deskripsi: "was to design an easy to use website",
            profil: [profil3, profil4, profil5, profil1, profil2],
            tanggal: "Due: Oct 2021",
        },
    ];
    const listEmployee = [
        {
            profil: profil1,
            nama: "Thad Eddings",
            job: "Product Designer",
            bendera: bendera1,
            negara: "Singapore",
            kondisi: "Onboarding",
        },
        {
            profil: profil2,
            nama: "Rochel Foose",
            job: "Project Manager",
            bendera: bendera2,
            negara: "Canada",
            kondisi: "Onboarding",
        },
        {
            profil: profil3,
            nama: "Phyllis Godley",
            job: "UI Designer",
            bendera: bendera3,
            negara: "India",
            kondisi: "Active",
        },
        {
            profil: profil4,
            nama: "Brittni Lando",
            job: "CEO",
            bendera: bendera4,
            negara: "Malaysia",
            kondisi: "Active",
        },
        {
            profil: profil5,
            nama: "John Doe",
            job: "Data Analyst",
            bendera: bendera5,
            negara: "China",
            kondisi: "Onboarding",
        },
    ];
    return (
        <div className="rounded-lg p-3 m-4 bg-zinc-100 flex-1 flex flex-col box-border">
            <HeaderHome />
            <div className="flex flex-col gap-3 rounded-lg flex-1 overflow-y-auto scrollbar-thin">
                {/* baris 1 */}
                <div className="flex flex-1 gap-3 rounded-lg">
                    {/* Payment Insight */}
                    <div className="flex-1 bg-white p-2 rounded-lg space-y-2 flex flex-col justify-center items-center max-h-full">
                        <JudulContent
                            href={paymentsInsight.href}
                            svg={paymentsInsight.svg}
                            text={paymentsInsight.text}
                            className={paymentsInsight.className}
                            svgButton={paymentsInsight.svgButton}
                            textButton={paymentsInsight.textButton}
                        />
                        <AreaChartComponents />
                    </div>
                    {/* Task */}
                    <div className="w-1/3 bg-white rounded-lg p-2 flex flex-col space-y-4">
                        <JudulContent
                            href={task.href}
                            svg={task.svg}
                            text={task.text}
                            className={task.className}
                            svgButton={task.svgButton}
                            textButton={task.textButton}
                        />
                        <div className="h-80 rounded-md overflow-auto overflow-y-hidden hover:overflow-y-auto hover:scroll-smooth hover:scrollbar-thin hover:scrollbar-track-white">
                            <div className="space-y-4">
                                {listTask.map((task) => (
                                    <TaskList
                                        status={task.status}
                                        text={task.text}
                                        tanggal={task.tanggal}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* baris 2 */}
                <div className="flex gap-3 flex-1 rounded-lg">
                    {/* Current Project */}
                    <div className="w-1/2 bg-white rounded-lg p-2 flex-col space-y-2">
                        <JudulContent
                            href={currentProjects.href}
                            svg={currentProjects.svg}
                            text={currentProjects.text}
                            className={currentProjects.className}
                            svgButton={currentProjects.svgButton}
                            textButton={currentProjects.textButton}
                        />
                        <div className=" flex-1 p-2 h-96 overflow-auto overflow-y-hidden hover:overflow-y-auto hover:scroll-smooth hover:scrollbar-thin hover:scrollbar-track-white">
                            <div className="space-y-2">
                                {listCurrentProjects.map((project) => (
                                    <ProjectList
                                        img={project.img}
                                        judul={project.judul}
                                        profil={project.profil}
                                        status={project.status}
                                        deskripsi={project.deskripsi}
                                        tanggal={project.tanggal}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Employee */}
                    <div className="w-1/2 rounded-lg p-2 bg-white flex flex-col space-y-2 max-h-full">
                        <JudulContent
                            href={employee.href}
                            svg={employee.svg}
                            text={employee.text}
                            className={employee.className}
                            svgButton={employee.svgButton}
                            textButton={employee.textButton}
                        />
                        <EmployeeListHeader />

                        <div className="flex-1 m-1 overflow-auto overflow-y-hidden hover:overflow-y-auto hover:scroll-smooth hover:scrollbar-thin hover:scrollbar-track-white">
                            {listEmployee.map((employee) => (
                                <EmployeeListBody
                                    profil={employee.profil}
                                    nama={employee.nama}
                                    job={employee.job}
                                    bendera={employee.bendera}
                                    negara={employee.negara}
                                    kondisi={employee.kondisi}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTemplates;
