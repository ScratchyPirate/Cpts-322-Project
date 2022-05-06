import React, { useState, useEffect } from "react";
import UserService from "../services/userService";

const Admin = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getAdmin().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []
  );

  const registeredUser = UserService.getRegisteredUser();
  const ModifyUser = (db, registeredUser) => {
    // ...
  };

  const ModifyClassroom = (db, clasroom) => {
    // ...
  };

  const DropCourse = (course) => {
    // ...
  };

  const Viewgrade = (course) => {
    // ...
  };

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Admin;
