import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import "./UserItem.scss";

const UserItem = ({ user, updateUsers }) => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUsers(user.id, {
      first_name: name,
      last_name: lastName,
      email: email,
    });
    setOpenModal(false)
  };

  //   const [formData, setFormData] = useState({
  //     firstName: user.first_name,
  //     lastName: user.last_name,
  //     email: user.email,
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;

  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };
  //   const handleUpdate = (e) => {
  //     e.preventDefault();

  //     updateUsers(user.id, {
  //       first_name: formData.firstName,
  //       last_name: formData.lastName,
  //       email: formData.email,
  //     });
  //   };
  //   const updateFunc = (id) => {
  //     setOpenModal(true);
  //     updateUsers(id);
  //   };
  return (
    <>
      <div className="user_item">
        <img src={user?.avatar} alt="" />
        <div className="user_item_wrapper">
          <p>{`${user?.first_name} ${user?.last_name}`}</p>
          <p>{user?.email}</p>
          <div className="user_item_btn_wrapper">
            <button className="btn_delete">Delete</button>
            <button className="btn_edit" onClick={() => setOpenModal(true)}>
              Edit
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal close={setOpenModal}>
          <div className="edit">
            <div className="edit_header">
              <h2>Edit users</h2>
            </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Update User</button>
              </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default UserItem;
