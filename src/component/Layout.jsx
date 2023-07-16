import {useState} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    const [nav, setNav] = useState(0)
  return (
    <div>
      <Navbar nav={nav} setNav={setNav}/>
      <Sidebar nav={nav} setNav={setNav}/>
      <div className="md:ml-[250px] p-[1rem] h-[100vh] relative mt-[80px] bg-[#abdbe3]">{children}</div>
    </div>
  );
};

export default Layout;
