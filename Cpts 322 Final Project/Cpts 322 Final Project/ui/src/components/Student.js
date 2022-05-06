import React, { useState, useEffect } from "react";
import UserService from "../services/userService";

const Student = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getStudent().then(
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

  var attendance = new Boolean[0,False]
  var courses = [Course]
  var grades = [4.0]
  const isAbsent = (course, int) => {
    // ...
  };
  const isPresent = (course, int) => {
    // ...
  };

  const AddCourse = (course) => {
    // ...
  };

  const DropCourse = (course) => {
    // ...
  };

  const ViewGrade = (course) => {
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

export default Student;
