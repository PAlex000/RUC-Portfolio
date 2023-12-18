import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../../redux/actions/UserActions";
import CustomContainer from "../common/CustomContainer";
import { Row, Col } from "react-bootstrap";
import UserCard from "../common/UserCard";

const h1Style = {
  marginTop: "1em",
  color: "white",
  textAlign: "center",
};

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
      <h1 style={h1Style}>Admin Dashboard</h1>
      <Col style={{ maxWidth: "85%", margin: "0 auto" }}>
        <Row className="d-flex justify-content-center">
          {users.map((user) => (
            <Col key={user.userId} xs={6} md={4} lg={6} className="mb-4">
              <UserCard
                firstName={user.firstName}
                lastName={user.lastName}
                onDelete={() => handleDeleteUser(user.userId)}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </CustomContainer>
  );
};

export default Admin;
