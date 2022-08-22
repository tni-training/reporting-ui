import { FaBattleNet, FaRocket} from 'react-icons/fa';
import {BsArrowRightCircle, BsArrowRightCircleFill} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import './components.css';

const SideBar = ({children}) => {
  return(
  <>
    <div className="main-container">
      <div  className='Sidebar'>
      <FaBattleNet className="icons"/>
      <Button size="large"><NavLink to='/jobs' className="navlink">Jobs</NavLink></Button>

      <BsArrowRightCircle className="icons"/>
		  <Button size="large"><NavLink to='/sources' className="navlink">Sources</NavLink></Button>

      <BsArrowRightCircleFill className="icons"/>
		  <Button size="large"><NavLink to='/destination' className="navlink">Destinations</NavLink></Button>

      <FaRocket className="icons-last"/>
      <Button size="large">	<NavLink to='/update' className="navlink">Update</NavLink></Button>
      </div>    
      <div className="other">
      {children}
      </div>
    </div>
  </>
  )
}
export default SideBar;