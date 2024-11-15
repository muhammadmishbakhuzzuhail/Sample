import Navbar from "../templates/Navbar";
import HomeTemplates from "../templates/HomeTemplate";

const Home = () => {
    return (
        <div className="h-screen w-screen bg-slate-900 flex">
            <Navbar />
            <HomeTemplates />
        </div>
    );
};
export default Home;
