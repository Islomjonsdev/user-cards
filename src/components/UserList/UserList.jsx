import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import UserItem from "../UserItem/UserItem";
import "./UserList.scss";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [openAddUserPopup, setOpenAddUserPopup] = useState(false);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        console.log(res?.data?.data);
        setUsers(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateUsers = (id, updateUser) => {
    axios
      .put(`https://reqres.in/api/users/${id}`, updateUser)
      .then((res) => {
        if (res.status === 200) {
          console.log("User updated:", res.data);
          setUsers((prevUsers) =>
            prevUsers.map((user) =>
              user.id === id ? { ...user, ...updateUser } : user
            )
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="user_list">
        <div className="container">
          <h1>User Cards</h1>
          <div className="user_list_wrapper">
            <button onClick={() => setOpenAddUserPopup(true)}>
              Add user cards
            </button>
            <div className="user_list_blog">
              {users?.map((user, index) => (
                <UserItem key={index} user={user} updateUsers={updateUsers} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {openAddUserPopup && (
        <Modal close={setOpenAddUserPopup}>
          <div>Open user modal</div>
        </Modal>
      )}
    </>
  );
};

export default UserList;
