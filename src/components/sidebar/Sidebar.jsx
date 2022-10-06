import {React, useContext} from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {Link} from 'react-router-dom'
// import { darkModeContext } from "./context/darkModeContext";
import { DarkModeContext } from "../../context/darkModeContext";

function Sidebar() {

  const[dispatch] = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{textDecoration: "none"}}>
      <span className="logo">lamadmin</span>
        </Link>
    </div>
    <div className="center">
      <ul>
        <p className="title">MAIN</p>
        <li>
          <DashboardIcon className="icon" />
          <span>Dashboard</span>
        </li>
        <p className="title">LIST</p>
        <Link to='/users' style={{textDecoration: "none"}}>
        <li>
          <PeopleIcon className="icon" />
          <span>Users</span>
        </li>
        </Link>
        <Link to='/products' style={{textDecoration: "none"}}>
        <li>
          <StoreIcon className="icon" />
          <span>Products</span>
        </li>
        </Link>
        <li>
        <CreditCardIcon className="icon" />
          <span>Orders</span>
        </li>
        <li>
        <LocalShippingIcon className="icon" />
          <span>Delivery</span>
        </li>
        <p className="title">USEFUL</p>
        <li>
        <InsertChartIcon className="icon" />
          <span>Stats</span>
        </li>
        <li>
        <NotificationsNoneIcon className="icon" />
          <span>Notifications</span>
        </li>
        <p className="title">SERVICE</p>
        <li>
          <SettingsSystemDaydreamIcon className="icon" />
          <span>System Health</span>
        </li>
        <li>
          <PsychologyRoundedIcon className="icon" />
          <span>Logs</span>
        </li>
        <li>
          <SettingsSuggestRoundedIcon className="icon" />
          <span>Setting</span>
        </li>
        <p className="title">USER</p>
        <li>
          <AccountCircleRoundedIcon className="icon" />
          <span>Profile</span>
        </li>
        <li>
          <LogoutRoundedIcon className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className="bottom">
      <div className="colorOption" onClick={() => dispatch ({ type: "LIGHT"})}
      ></div>
      <div className="colorOption"onClick={() => dispatch ({ type: "DARK"})}
      ></div>
    </div>
    </div>
  )
}

export default Sidebar