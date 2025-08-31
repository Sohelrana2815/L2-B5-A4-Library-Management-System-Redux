import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      Home Component!
      <Outlet />
    </div>
  );
};

export default Home;
