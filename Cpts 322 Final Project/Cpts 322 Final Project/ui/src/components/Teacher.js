import React, { useState, useEffect } from "react";
import UserService from "../services/userService";

const Teacher = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getTeacher().then(
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

  var classroom = ""

  const setCourse = () => {
    // ...
  };

  const getCourse = () => {
    // ...
  };

  const TakeAttendance = (course) => {
    // ...
  };

  const AddStudent = (student) => {
    // ...
  };

  const RemoveStudent = (student) => {
    // ...
  };

  const BeginQuestionSet = () => {
    // ...
  };

  const SetGrade = (student, double) => {
    // ...
  };

  const GetGrade = (student) => {
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

export default Teacher;
