import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const { fullName, bio, profession, children, handleName } = props;
  return (
    <div
      style={{
        backgroundColor: "#009879",
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 20,
        borderRadius: 20,
        boxShadow: " 0 0 20px rgba(0, 0, 0, 0.15)",
      }}
    >
      <h3>{fullName}</h3>
      <p>{bio}</p>
      <p>{profession} </p>
      {handleName()}
      {children}
    </div>
  );
};

Profile.defaultProps = {
  fullName: "This is the fullName default value",
  bio: "This is the bio default value",
  profession: "This is the profession default value",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};

export default Profile;
