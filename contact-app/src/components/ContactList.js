import React from "react";

const ContactList = (props) => {
  console.log(props);

  const renderContactList = props.contacts.map((contact) => {
    return (    );
  });
  return <div className="ui celled List">{renderContactList}</div>;
};

export default ContactList;
