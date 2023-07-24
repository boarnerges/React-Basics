import React from "react";
import user from "../image/users.png";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div>
      <div
        className="item"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img className="ui avatar image" src={user} alt="user" />

          <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
          </div>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
