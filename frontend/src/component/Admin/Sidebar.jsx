import React from 'react';
import { Link } from 'react-router-dom';
import { RiDashboardLine, RiEditLine, RiAddLine } from 'react-icons/ri';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <Link to="/admin/dashboard" className="sidebar-item">
          <RiDashboardLine className="sidebar-icon" />
          Dashboard
        </Link>

        <div className="treeview">
          <p>Property</p>
          <ul>
            <li>
              <Link to="/admin/allproperty" className="treeview-item">
                <RiEditLine className="treeview-icon" />
                Edit Property
              </Link>
            </li>
            <li>
              <Link to="/admin/createproperty" className="treeview-item">
                <RiAddLine className="treeview-icon" />
                Create Property
              </Link>
            </li>
          </ul>
        </div>

        <div className="treeview">
          <p>Blogs</p>
          <ul>
            <li>
              <Link to="/admin/allblog" className="treeview-item">
                <RiEditLine className="treeview-icon" />
                Edit Blogs
              </Link>
            </li>
            <li>
              <Link to="/admin/createblog" className="treeview-item">
                <RiAddLine className="treeview-icon" />
                Create Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
