import React, { useState } from 'react';
import { connect } from "react-redux";
import { addUser } from "../../store/actions"
import "./AddUser.scss"
import Header from '../header/Header';

function AddUser(props) {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [location, setLocation] = useState("");


  const handleChangeName = (event) => {
    setName(event.target.value);

  };
  const handleChangeMail = (event) => {
    setMail(event.target.value)
  };
  const handleChangeLocation = (event) => {
    setLocation(event.target.value)
  };
  // const handleChangeImage = async(event) => {
  //   event.preventDefault()
  //   const body = new FormData()
  //   body.append('file', event.target.files[0])
  //   // console.log(body.get('file'))
  //   let res = await fetch("https://brainstorm-interview-task.herokuapp.com/images",{
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //     },
  //     body: body
  //   })
  //   console.log(res)
  // };

  const handleClick = () => {
    let user = {
      name: name,
      email: email,
      location: location,
    };
    props.addUser(user);
    setName("")
    setMail("")
    setLocation("")
  };
  return (
    <>
      <Header />
      <div className="adduser_part">
          <p>New User</p>
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
          onChange={(event)=>handleChangeImage(event)}
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
          disabled={name.length === 0}
          className="form_btn"
        >Save</button>
      </form>

    </>
  )
}


const mapDispatchToProps = {
  addUser: addUser

}


export default connect(null, mapDispatchToProps)(AddUser);
