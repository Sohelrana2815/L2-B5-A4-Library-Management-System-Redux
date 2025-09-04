import Navbar from "@/components/layout/Navbar";
import { Footer } from "react-day-picker";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
