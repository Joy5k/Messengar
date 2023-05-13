import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";

const Dashboard = () => {
 
  return (
      <div>
          <Navbar></Navbar>
      <div className="drawer drawer-mobile drawer-end">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80 bg-gray-100 text-base-content">
            <li>
             <Link to="/dashboard/myorders">My Orders</Link>
            </li>
         
              <>
                <li>
                  <Link to='/dashboard/allbuyers'>All Buyers</Link>
                </li>
                <li>
                  <Link to='/dashboard/allsellers'> All Sellers</Link>
                </li>
                <li>
                  <Link to='/dashboard/allPhones'> All Phones</Link>
                </li>
                <li>
                  <Link to='/dashboard/reporteditems'>Reported Items</Link>
                </li>
              </>
          
                <li>
                  <Link to='/dashboard/addproduct'>Add A product</Link>
                </li>
                <li>
                  <Link to='/dashboard/myproduct'>My Products</Link>
                </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;