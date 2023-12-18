import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../../redux/actions/UserActions";
import CustomContainer from "../common/CustomContainer";

const Admin = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <CustomContainer fluid>
      <h1>Admin Dashboard</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>
            {user.firstName} {user.lastName}
            <button onClick={() => handleDeleteUser(user.userId)}>
              Delete User
            </button>
          </li>
        ))}
      </ul>
    </CustomContainer>
  );
};

export default Admin;
