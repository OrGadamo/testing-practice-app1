import "./Grade.css";
import React from "react";

function Grade({ childrenNum, className, teacher }) {
  return (
    <div className="grade">
      <h1 data-testid="h1_class_name">{className}</h1>
      <h1 data-testid="h1_teacher_name">{teacher}</h1>
      <h1 data-testid="h1_children_num">{childrenNum}</h1>
    </div>
  );
}

export default Grade;
