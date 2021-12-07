import './Nav.scss'
import { NavLink } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa';
import { AiFillShop } from 'react-icons/ai';
import { GiMeal } from 'react-icons/gi';
import home from '../../../src/assets/image/Shape.svg'
import users from '../../../src/assets/image/Vector.svg'
import usersW from '../../../src/assets/image/VectorW.svg'
import rest from '../../../src/assets/image/JobSeeker.svg'

function Nav() {
       return (
              <nav>
                     <div className="top"></div>
                     <ul>
                            <li>
                                   <div className='nav_icon_h'>
                                          <img src={home} alt="" />
                                   </div>

                                   <p className='nav_item'>Homepage</p>
                            </li>



                            <NavLink
                                   to='/'
                                   exact
                            >
                                   <li className='navlink'>
                                          <div className='nav_icon'>
                                                 <img src={usersW} alt="" />
                                          </div>

                                          <p className='nav_item'>Users</p>

                                   </li>
                            </NavLink>


                            <li>
                                   <div className='nav_icon'>
                                          <img src={users} alt="" />
                                   </div>

                                   <p className='nav_item'>Premium users </p>
                            </li>
                            <li>
                                   <div className='nav_icon'>
                                          <img src={rest} alt="" />
                                   </div>

                                   <p className='nav_item'>Restaurants</p>
                            </li>
                            <li >
                                   <div className='nav_icon'>
                                          < FaUserAlt />
                                   </div>
                                   <div className='nav_item'>
                                          <p >Learn</p>
                                          <ul>
                                                 <li>Quick start</li>
                                                 <li> Recipes</li>
                                                 <li>Books</li>
                                                 <li>Movies</li>
                                                 <li>Dietician </li>
                                          </ul>
                                   </div>

                            </li>
                            <li>
                                   <div className='nav_icon'>
                                          <AiFillShop />
                                   </div>

                                   <p className='nav_item'>Shop</p>
                            </li>
                            <li>
                                   <div className='nav_icon'>
                                          <GiMeal />
                                   </div>

                                   <p className='nav_item'>Cuisine</p>
                            </li>
                            <li>
                                   <div className='nav_icon'>
                                          <GiMeal />
                                   </div>

                                   <p className='nav_item'>Post</p>
                            </li>
                     </ul>
              </nav>
       )

}

export default Nav
