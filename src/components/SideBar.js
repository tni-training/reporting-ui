import { motion } from "framer-motion";
import {  FaBattleNet, FaRocket} from 'react-icons/fa';
import {BsArrowRightCircle, BsArrowRightCircleFill} from 'react-icons/bs';
import './components.css';
import {
	Nav,
	NavLink,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavLink';

const SideBar = ({children}) => {
  return(<>
    <div className="main-container">
    <div className='SideBar'>
       
        <motion.div  className='Sidebar'>
        <FaBattleNet className="icons"/>
        <NavLink to='/jobs' style={{height : '30px'}}>
                    Jobs
					</NavLink>
        <BsArrowRightCircle className="icons"/>
		<NavLink to='/sources'  style={{height : '30px'}}>
					Sources
					</NavLink>
        <BsArrowRightCircleFill className="icons"/>
		<NavLink to='/destination' style={{height : '30px'}}>
				    Destinations
					</NavLink>
        <FaRocket className="icons-last"/>
		<NavLink to='/update' style={{height : '30px'}}>
					Update
					</NavLink>
          </motion.div>
         
        
    </div>
    <div className="other">
    {children}
    </div>
</div>
</>
  )

}

export default SideBar
