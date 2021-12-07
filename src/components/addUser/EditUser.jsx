import React, { useState } from 'react';
import { connect } from "react-redux";
import { editUser } from "../../store/actions"
import "./AddUser.scss"
import Header from '../header/Header';

function EditUser(props) {
  const findUser = props.users.find(item => item.id === props.location.state.id)
  const [name, setName] = useState(findUser.name);
  const [email, setMail] = useState(findUser.email);
  const [location, setLocation] = useState(findUser.location);


  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeMail = (event) => {
    setMail(event.target.value)
  };
  const handleChangeLocation = (event) => {
    setLocation(event.target.value)
  };


  const handleClick = () => {
    let editedUser = {
      id: findUser.id,
      name: name,
      email: email,
      location: location,
    };
    console.log(editedUser)
    // props.editUser(editedUser);
    // setName("")
    // setMail("")
    // setLocation("")
    // setImage(null)

    // props.history.push('/');
  };
  
  
  return (
    <>
      <Header />
      <div className="adduser_part">
          <p>Edit User</p>
          <div className="line"></div>
      </div>
      <form     method="post" name="fileinfo" className="adduser_form">
        <input
          type="text"
          placeholder="User Name"
          value={name}
          onChange={handleChangeName}
          className="form_input"
        />
        {/* <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          onChange={handleChangeImage}
         /> */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeMail}
          className="form_input"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleChangeLocation}
          className="form_input"
        />
        <button
          onClick={handleClick}
          // disabled={name.length === 0}
          className="form_btn"
        >Save</button>
      </form>

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = {
  editUser: editUser

}


export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
