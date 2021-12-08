import React, { useEffect } from 'react'
import './Users.scss'
import '../header/Header.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getUsers, removeUser } from '../../store/actions'

import { FaTrash } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { BsBellFill } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import DisTrue from '../../assets/image/VectorT.png'
import DisFalse from '../../assets/image/VectorF.png'

function Users(props) {

  useEffect(() => {
    props.getUsers()
  }, []);

  function formatdate(date) {
    return `${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(0, 4)}`
  };

  return (
    <>
      <header>
        <div className="headerIcons">
          <FaSearch />
        </div>
        <div className="headerIcons circle bell">
          <BsBellFill />
          <span>4</span>
        </div>

        <div className="pic">
          <span></span>
        </div>

      </header>
      <div className="adduser_part adduser_part_users">
        <p>All Users</p>
        <div className="line"></div>
        <Link to='/adduser' className="adduserbtn">Add User</Link>
      </div>
      <div className="users_part">
        <table >
          <tr className="title_part">
            <th><input type="checkbox" name="" id="" /></th>

            <th>Photo</th>
            <th>Name</th>
            <th>Location</th>
            <th>Registered Date</th>
            <th>Last Active Date</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Actions</th>
          </tr>
          {props.users.map((data) =>
            <tr className="single_user" key={data.id} >
              <th><input type="checkbox" name="" id="" /></th>
              <td className="pic"><img src={data.photo} alt="" /> </td>
              <td> {data.name}</td>
              <td> {data.location}</td>
              <td> {formatdate(data.registeredDate)}</td>
              <td> {formatdate(data.lastActiveDate)}</td>
              <td> <Link to={{ pathname: `mailto:${data.email}` }} target="_blank" className="mail"><MdMail /> </Link></td>
              <td>
                <Link className="mail" to={{
                  pathname: `/edituser/${data.id}`,
                  state: {
                    id: data.id,
                  }

                }}><FiEdit /> </Link></td>
              <td>
                <span> <img className="disabled" src={data.disabled ? DisFalse : DisTrue} alt="" /></span >

                <button
                  onClick={() => { props.removeUser(data.id) }}
                  className="trash"><FaTrash /></button></td>
            </tr>
          )}
        </table>
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = {
  getUsers,
  removeUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)
