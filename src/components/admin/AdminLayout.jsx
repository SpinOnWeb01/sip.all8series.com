import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
import Header from './Header';

function AdminLayout({colorThem,handleClick, mockDataTeam}) {
  return (
    <>
    <div className={`App ${colorThem} `}>
      <Header colorThem={colorThem} handleClick={handleClick} mockDataTeam={mockDataTeam}/>
      <Sidebar colorThem={colorThem} />
      <Outlet />
      </div>
    </>
  )
}

export default AdminLayout